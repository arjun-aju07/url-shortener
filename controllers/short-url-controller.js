import ShortUrl from '../models/ShortUrl.js'

import asyncWrapper from '../middleware/async-wrapper.js'

import { createCustomError } from '../errors/custom-error.js'

const getAllShortUrls = asyncWrapper(async (req, res) => {
    const shortUrls = await ShortUrl.find({}) // will get all documents
    res.status(200).json({ shortUrls })
})

const createShortUrl = asyncWrapper(async (req, res) => {
    const shortUrl = await ShortUrl.create(req.body)
    res
        .status(201)
        .json({ shortUrl })
})

export {
    getAllShortUrls,
    createShortUrl
}