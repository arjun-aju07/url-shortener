import mongoose from 'mongoose'
import shortId from 'shortid'

// sets schema - representation of the collection
const ShortUrlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: [true, 'LONG_URL_REQUIRED'], // array with boolean and error message that should be thrown
        trim: true, // will remove unwanted white space
    },
    shortUrl: {
        type: String,
        default: shortId.generate,
    },
    count: {
        type: Number,
        default: 0
    }
})

// model - provides interface between database and app to create, query etc, will be used in controller
export default mongoose.model('ShortUrl', ShortUrlSchema) // method expects model name and schema