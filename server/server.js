import express from 'express'
import passport from 'passport'
// import FacebookStrategy from 'passport-facebook'
import GoogleStrategy from 'passport-google-oauth20'
// Import Facebook and Google OAuth apps configs
import {google} from './config'

const transformGoogleProfile = (profile) => ({
  name: profile.displayName,
  avatar: profile.image.url
})

passport.use(new GoogleStrategy(google, async (accessToken, refreshToken, profile, done) => done(null, transformGoogleProfile(profile._json))

))
