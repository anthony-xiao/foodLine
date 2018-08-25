const express = require('express')
const passport = require('passport')
// const FacebookStrategy = require('passport-facebook')
const GoogleStrategy = require('passport-google-oauth20')
// Import Facebook and Google OAuth apps configs
const {google} = require('./auth/config')

const transformGoogleProfile = (profile) => ({
  name: profile.displayName,
  avatar: profile.image.url
})

passport.use(new GoogleStrategy(google, async (accessToken, refreshToken, profile, done) => done(null, transformGoogleProfile(profile._json))
))

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

const app = express()

app.use(passport.initialize)
app.use(passport.session)

app.get('/auth/google', passport.authenticate(google, {scope: ['profile']}))

app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/auth/google'}),
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)))

module.exports = app
