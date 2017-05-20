const repl = require('repl').repl
const { play } = repl.context

const twitter = require('..')

module.exports = () => {
    twitter.search({
        track: 'bieber',
        minFollowers: 100
    }).do(twitter.log.sentiment).flatMap(twitter.map.toMusic).subscribe(play)
}
