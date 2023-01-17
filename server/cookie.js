module.exports = {
    setSecure: function(res, name, value, maxAge=undefined) {
        const cookieProps = {
            httpOnly: true,
            secure: true,
            sameSite: 'lax'
        };
        if (typeof(maxAge) !== 'undefined') {
            cookieProps['maxAge'] = maxAge;
        }
        res.cookie(name, value, cookieProps);
    }
}
