module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnUrl = req.originalUrl;
        req.flash('error', "You must be signed in!");
        res.redirect('/login');
    } else {
        next();
    }
};