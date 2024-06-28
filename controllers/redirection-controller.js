import ShortUrl from '../models/ShortUrl.js'

import asyncWrapper from '../middleware/async-wrapper.js'

const redirectToRequestedUrl = asyncWrapper(async (req, res, next) => {
    const shortUrl = await ShortUrl.findOne({ shortUrl: req.params.shortUrl })

    if (!shortUrl) {
        return next()
    }

    shortUrl.count++
    shortUrl.save()

    res.redirect(shortUrl.longUrl)
})

export {
    redirectToRequestedUrl
}