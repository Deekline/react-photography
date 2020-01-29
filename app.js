const express = require( 'express' );
const path = require( 'path' );

const app = express();

app.use( express.static( path.join( __dirname, 'client/build' ) ) );

app.use( express.json( { extended: true } ) );
app.use( express.urlencoded( {
    extended: false,
  } ),
);


app.use( '/api/auth', require( './routes/auth.routes' ) );
app.use( '/api/contact', require( './routes/comment.routes' ) );
app.use( '/api/sign', require( './routes/comment.routes' ) );
app.use( '/api/admin', require( './routes/comment.routes' ) );
app.use( '/api/admin', require( './routes/comment.routes' ) );


const PORT = process.env.PORT || 5000;


app.listen( PORT, () => console.log( `start at port: ${ PORT }` ) );









