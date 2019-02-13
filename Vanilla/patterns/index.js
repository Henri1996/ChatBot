const XRegExp = require('xregexp');

const  patternDict = [{
    pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
    intent: 'Hello'
},{
    pattern:'\\b(bye|exit)\\b',
    intent: 'Exit'
},
{
    pattern:'\\b(aide|aider|help)\\b',
    intent: 'aide'
},
{
    pattern:'\\b(good|well|nice)\\b',
    intent: 'Nice'
},
{
    pattern:'\\b([0-10])\\b',
    intent: 'nombre'
},
{
    pattern:'\\b(question)\\b',
    intent: 'question'
},
{
    pattern:'\\b(in[ ](?<city>[a-zA-Z]*(?:[ |-][a-zA-Z]*)))\\b',
    intent: 'Current Weather'
}
,
{
    pattern:'\\b(in[ ](?<city>[a-zA-Z]*))\\b',
    intent: 'Current Weather2'
},
{
    pattern:'\\b[Tt]ime[ ]in[ ](?<city>[a-zA-Z]*))\\b',
    intent: 'time'
}

];
module.exports = patternDict;
//c3b9c2a244ac46e9954225557190702