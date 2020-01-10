const { Router } = require( "express" );
const bcrypt = require( "bcryptjs" );
const config = require( "config" );
const jwt = require( "jsonwebtoken" );
const { check, validationResult } = require( "express-validator" );
const User = require( "../models/User" );
const router = Router();

// REGISTRATION
router.post( "/register",
  // Checking fields email and password for some parameters
  [
    check( "email", "Bad email" ).isEmail(),
    check( "password", "Short Password" ).isLength( 6 )
  ],
  // Async function that do logic or registration
  //1.Validate data
  //2. Check candidate for individuality
  //3.Hash password with bcrypt
  //4.Create new user
  async ( req, res ) => {
    try {
      const errors = validationResult( req );

      if ( !errors.isEmpty() ) {
        return res.status( 400 ).json( {
          errors: errors.array(),
          message: "wrong data for validation"
        } );
      }

      const { email, password } = req.body;
      const candidate = await User.findOne( { email } );

      if ( candidate ) {
        return res.status( 400 ).json( { message: "Such user is exist" } );
      }

      const hashedPassword = await bcrypt.hash( password, 12 );
      const user = new User( { email, password: hashedPassword } );
      await user.save();
      res.status( 201 ).json( { message: "User was created" } );
    } catch ( e ) {
      req.status( 500 ).json( { message: "something goes wrong" } );
    }
  } );

// LOGIN
router.post( "/login",
  //Check fields for some parameters
  [
    check( "email", "Input correct email" ).normalizeEmail().isEmail(),
    check( "password", "Enter password" ).exists()
  ],
  async ( req, res ) => {
    try {
      const errors = validationResult( req );

      if ( !errors.isEmpty() ) {
        return res.status( 400 ).json( {
          errors: errors.array(),
          message: "wrong data for come in"
        } );
      }

      const { email, password } = req.body;
      const user = await User.findOne( { email } );

      if ( !user ) {
        return res.status( 400 ).json( { message: "User not found" } );
      }

      const isMatch = await bcrypt.compare( password, user.password );

      if ( !isMatch ) {
        return res.status( 400 ).json( { message: "Wrong password" } );
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get( "jwtSecret" ),
        { expiresIn: "1h" }
      );

      res.json( { token, userId: user.id } );

    } catch ( e ) {
      req.status( 500 ).json( { message: "something goes wrong" } );
    }
  } );


module.exports = router;
