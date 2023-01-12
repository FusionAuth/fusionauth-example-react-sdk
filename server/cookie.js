module.exports = {
    setSecure: function(res, name, value) {
        res.cookie(name, value, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax'
        });
    }
}
