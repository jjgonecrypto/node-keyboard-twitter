const twitter = require('..')

module.exports = () => {
    twitter.search({
        track: 'javascript'
    }).do(twitter.log.summary).subscribe()
}
