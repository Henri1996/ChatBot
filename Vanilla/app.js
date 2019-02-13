'use strict';
var dico = require('./patterns')
const Readline = require('readline');
const rl = Readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
})
const matcher = require('./matcher')
const weather = require("./weather")
rl.setPrompt('User > ');
rl.prompt();
rl.on('line', reply => {

	matcher(reply,cb=>{
		//console.log(`${cb.intent}`)
		switch(`${cb.intent}`)
		{

			case 'Hello': console.log('Chatbot > '+`${cb.entities.greeting}`+ ', How are you ?');
			rl.prompt();
			break;
			case 'Nice' : console.log('Chatbot > Nice');
			break;
			case 'aide' : 
			console.log('Chatbot > Allez voir un medecin');
			break;
			case 'Current Weather':
			giveWeather(`${cb.entities.city}`).then((value)=>{
				
				
				console.log('Chatbot > The weather of ' + `${cb.entities.city}` +' now is ' + value.current.condition.text);
				//console.log('Do you want the weather for tomorrow ?')
				rl.question('Chatbot > Do you want the weather for tomorrow (yes/no)?', function(answer){
					if(answer === 'yes')
					{
						console.log('Chatbot > The weather of tomorrow is '+value.forecast.forecastday[1].day.condition.text);
					}
					else console.log('ok, can I do something else ? ').then();
					rl.prompt();
				})
			});
			
			break;
			case 'Current Weather2':
			giveWeather(`${cb.entities.city}`).then((value)=>{
				
				console.log('Chatbot > The weather of ' + `${cb.entities.city}` +' now is ' + value.current.condition.text);
				//console.log('Do you want the weather for tomorrow ?')
				rl.question('Chatbot > Do you want the weather for tomorrow (yes/no)?', function(answer){
					if(answer === 'yes')
					{
						console.log('Chatbot > The weather of tomorrow is '+value.forecast.forecastday[1].day.condition.text);
					}
					else console.log('chatbot > ok, can I do something else ? ').then();
					rl.prompt();
				})
				
			});
			
			break;
			case 'time':
			giveWeather(`${cb.entities.city}`).then((value)=>{
				console.log('Chatbot > It\'s'+value.current.localtime+' in '+value.current.name);
			})
			break;
			case 'Exit' : 
			console.log('Chatbot > See you, have a good night');
			process.exit(-1);
			//case 'undefined' : console.log('I didnt get it what do you mean!');
			default: console.log('Chatbot > I didnt get it what you wanted to say');
		}
		
		//console.log(`${cb.intent}`);
	});
	//console.log(`you said ${reply}`);
	//rl.prompt();


});


async function giveWeather(city){
	return await weather(city);

}