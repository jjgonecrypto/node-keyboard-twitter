'use strict'

const chalk = require('chalk')
const twitterSentiment = require('twitter-sentiment')

const profanity = new (require('bad-words'))()
const Rx = require('node-keyboard-rx')()

module.exports = {
    // Play music from tweets!
    // Enter the "track" to match (see https://dev.twitter.com/streaming/overview/request-parameters#track) and
    // the "minFollowers" of the tweeter to include.
    // Ex: twitter.searchAndHighlight({ track: 'bieber', minFollowers: 100 }).subscribe(play)
    searchAndHighlight({ track, minFollowers }) {
        const readable = twitterSentiment({ track, minFollowers })

        const tweets = Rx.Observable.fromEvent(readable, 'data')

        const cleaner = profanity.clean.bind(profanity)

        const { stdout } = process

        return tweets
            .do(({ sentiment }) => {
                stdout.write(`score: ${sentiment.score}, comparative: ${sentiment.comparative.toFixed(2)}`)
                stdout.write(` ${chalk.green(sentiment.positive.map(cleaner).join(' '))}`)
                stdout.write(` ${chalk.red(sentiment.negative.map(cleaner).join(' '))}\n`)
            })
            .finally(() => readable.emit('destroy'))
            .map(tweet => 48 + tweet.sentiment.score)
            .flatMap(note => [ note, note + 12 ])
    },

    //
    search({ track, minFollowers }) {
        const readable = twitterSentiment({ track, minFollowers })

        const tweets = Rx.Observable.fromEvent(readable, 'data').finally(() => readable.emit('destroy'))

        return tweets.map(tweet => 48 + tweet.sentiment.score).flatMap(note => [ note, note + 12 ])
    }
}

