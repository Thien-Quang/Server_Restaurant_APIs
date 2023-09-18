const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Account = require('../models/account'); // Import mô hình account

passport.use(new LocalStrategy(
    function (username, password, done) {
        // Tìm một tài khoản dựa trên username
        Account.findOne({ where: { username: username } })
            .then((account) => {
                if (!account) {
                    return done(null, false); // Không tìm thấy tài khoản
                }
                if (!account.verifyPassword(password)) {
                    return done(null, false); // Mật khẩu không đúng
                }
                return done(null, account); // Tài khoản hợp lệ
            })
            .catch((err) => {
                return done(err);
            });
    }
));

// Export passport để sử dụng trong ứng dụng của bạn
module.exports = passport;
