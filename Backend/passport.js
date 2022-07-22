const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
require("dotenv").config();

passport.use(
	new GoogleStrategy(
		{
			clientID:"573825293791-4hirdeu7asasdl819lkbtlbbcdo8l1jf.apps.googleusercontent.com",
			clientSecret:"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",
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
