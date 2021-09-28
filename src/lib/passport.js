import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import pool from "../database.js";
import * as helpers from "./helpers.js";

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const rows = await pool.query("SELECT * FROM usuarios WHERE email = ?", [
        email,
      ]);
      if (rows.length > 0) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(
          password,
          user.password
        );
        if (validPassword) {
          done(null, user, req.flash("success", "Welcome " + user.email));
        } else {
          done(null, false, req.flash("message", "Incorrect Password"));
        }
      } else {
        return done(
          null,
          false,
          req.flash("message", "The Email does not exists.")
        );
      }
    }
  )
);

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
//      const { fullname } = req.body;

      let newUser = {
        email,
        password,
      };

      newUser.password = await helpers.encryptPassword(password);
      // Saving in the Database
      const result = await pool.query("INSERT INTO usuarios SET ? ", newUser);
//      newUser.id = result.insertId;
      return done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
  const rows = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email]);
  done(null, rows[0]);
});
