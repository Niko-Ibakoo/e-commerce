// server.js
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import dotenv from 'dotenv';
import { urlencoded, json } from 'body-parser';
import './config/passport.js';
import authRoutes from './authRoutes.js';

// Initialize environment variables
dotenv.config();

const app = express();

// Configure Express server
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport and enable session support
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

// Start the server
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on port ${process.env.PORT || 3001}`);
});
