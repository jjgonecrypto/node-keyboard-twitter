'use strict'

const chalk = require('chalk')
const path = require('path')
const twitterSentiment = require('twitter-sentiment')

const profanity = new (require('bad-words'))()
const Rx = require('node-keyboard-rx')()

const examples = require('node-examples')

module.exports = {
    // Enter the "track" to match (see https://dev.twitter.com/streaming/overview/request-parameters#track) and
    // the "minFollowers" of the tweeter to include.
    // Ex: twitter.search({ track: 'bieber', minFollowers: 100 }).do(twitter.log.sentiment).flatMap(twitter.map.toMusic).subscribe(play)
    search({ track, minFollowers }) {
        const readable = twitterSentiment({ track, minFollowers })

        return Rx.Observable.stream(readable).finally(() => readable.emit('destroy'))
    },

    map: {
        toMusic(tweet) {
            const note = 48 + tweet.sentiment.score
            return [note, note + 12]
        }
    },

    log: {
        summary({ text, user, entities, favorite_count, retweet_count, sentiment }) {
            process.stdout.write(`{
                text: ${chalk.green(text.replace(/\n/, ''))},
                user: { name: ${chalk.red(user.screen_name)}, followers: ${chalk.blue(user.followers_count)} },
                retweet_count: ${chalk.yellow(retweet_count)}, favorite_count: ${chalk.yellow(favorite_count)}, sentiment: ${chalk.green(sentiment.score)},
                entities: ${Object.keys(entities)}
            }\n`)
        },

        sentiment({ sentiment: { score, comparative, positive, negative }}) {
            const { stdout } = process
            const cleaner = profanity.clean.bind(profanity)

            stdout.write(`score: ${score}, comparative: ${comparative.toFixed(2)}`)
            stdout.write(` ${chalk.green(positive.map(cleaner).join(' '))}`)
            stdout.write(` ${chalk.red(negative.map(cleaner).join(' '))}\n`)
        }
    }
}

examples({ path: path.join(__dirname, 'examples'), prefix: 'twitter_example_' })
