module.exports = function(req, res, next) {
    if (req.session) {
        next();
    }else {
        res.redirect("/");
    }
};