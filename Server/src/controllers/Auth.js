const passport = require('../Services/Auth')
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        // Khi xác thực thành công, tạo access token
        const accessToken = jwt.sign({ userId: user.id }, '%6*G#$v2P)38nWp!a@Y@#bTz&UfZ+9r5', { expiresIn: '1h' });

        // Gửi access token về cho người dùng
        res.json({ accessToken });
    })(req, res);
};

module.exports = {
    login,
};






