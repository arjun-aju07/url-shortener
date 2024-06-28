// https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
const errorHandler = (err, req, res, next) => {
    console.log(err)

    return res.status(500).json({ message: err })
}

export default errorHandler