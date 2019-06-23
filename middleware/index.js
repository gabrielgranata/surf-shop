module.exports = {
    // error handling function
    errorHandler: (fn) => 
    (req, res, next) => {
            Promise.resolve(fn(req,res,next)).catch(next);
        }
}