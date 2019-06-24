module.exports = {
    // error handling function
    asyncErrorHandler: (fn) => 
    (req, res, next) => {
            Promise.resolve(fn(req,res,next)).catch(next);
    }
}