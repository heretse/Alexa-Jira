//import required intents
var descriptionIntent = require('./getDescriptionIntent')
var moveIssueIntent = require('./moveIssueIntent')
var loadIssueIntent = require('./loadIssueIntent.js')

//export required intents
module.exports = {
    'descriptionIntent': descriptionIntent,
    'moveIssueIntent': moveIssueIntent,
    'loadIssueIntent': loadIssueIntent
}