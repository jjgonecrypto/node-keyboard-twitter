#node-keyboard-twitter

[![npm version](https://badge.fury.io/js/node-keyboard-twitter.svg)](https://badge.fury.io/js/node-keyboard-twitter) 

Twitter sentiment tracking plugin for node-keyboard

![](https://media.giphy.com/media/26ufoD2nuzU15OkY8/giphy.gif)

##Installation

###As Global
If you installed node-keyboard globally, then install this plugin via `npm i -g node-keyboard-twitter`

Then start node keyboard via `node-keyboard`, and import this plugin via `const twitter = requireg('node-keyboard-twitter')()`

###As Local
If instead you cloned node-keyboard, then install locally in that folder via `npm i node-keyboard-twitter`

Then start node keyboard via `node keyboard` and import this plugin via `const twitter = require('node-keyboard-twitter')()`

##Usage
Try out the twitter sentiment tracker by adding the `track` field (see [Twitter API for input options](https://dev.twitter.com/streaming/overview/request-parameters#track)) and the `minFollowers` that the account needs to have to be used.

```javascript
twitter.trackAndHighlight({ track: 'bieber', minFollowers: 100 )}).subscribe(play)
```

##In action
I spoke on node-keyboard at EmpireNode in November 2016.

Here's the excerpt for `node-keyboard-twitter`:
[![image](https://cloud.githubusercontent.com/assets/799038/20642880/e21b0b90-b3e8-11e6-8053-9271e7bff99c.png)](https://youtu.be/Wa5-DePTWdA?t=1289)
