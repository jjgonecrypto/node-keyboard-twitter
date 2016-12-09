#node-keyboard-twitter

[![npm version](https://badge.fury.io/js/node-keyboard-twitter.svg)](https://badge.fury.io/js/node-keyboard-twitter) 

Twitter sentiment tracking plugin for [node-keyboard](https://github.com/justinjmoses/node-keyboard).

![](https://media.giphy.com/media/26ufoD2nuzU15OkY8/giphy.gif)

##Installation

###As Global
If you installed node-keyboard globally, then install this plugin via `npm i -g node-keyboard-twitter`

Then start node keyboard via `node-keyboard`, and import this plugin via `const twitter = requireg('node-keyboard-twitter')`

###As Local
If instead you cloned node-keyboard, then install locally in that folder via `npm i node-keyboard-twitter`

Then start node keyboard via `node keyboard` and import this plugin via `const twitter = require('node-keyboard-twitter')`

##Usage
1. Ensure your environment variables for Twitter API usage are set. See https://github.com/justinjmoses/twitter-sentiment#installation 

2. Try out the twitter sentiment tracker by adding the `track` field (see [Twitter API for input options](https://dev.twitter.com/streaming/overview/request-parameters#track)) and the `minFollowers` that the account needs to have to be used.

```javascript
twitter.searchAndHighlight({ track: 'bieber', minFollowers: 100 )}).subscribe(play)
```

![twitter](https://cloud.githubusercontent.com/assets/799038/20651854/3049bf5a-b4bb-11e6-8af7-d91b7fd1f1e1.gif)

For a longer recording, checkout https://vid.me/MYR5

##Known issues
`Status Code: 420` - means you've been rate limited by Twitter. [Enhance your calm](https://dev.twitter.com/streaming/overview/connecting#rate-limiting).

##In action
I spoke on node-keyboard at EmpireNode in November 2016.

Here's the excerpt for `node-keyboard-twitter`:
[![image](https://cloud.githubusercontent.com/assets/799038/20642880/e21b0b90-b3e8-11e6-8053-9271e7bff99c.png)](https://youtu.be/Wa5-DePTWdA?t=1289)


