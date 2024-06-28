import express from 'express'

import {
    getAllShortUrls,
    createShortUrl
} from '../controllers/short-url-controller.js'

const router = express.Router()

router.route('/')
    .get(getAllShortUrls)
    .post(createShortUrl)

export default router