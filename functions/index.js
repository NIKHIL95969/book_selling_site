const functions = require("firebase-functions");
const express = require("express"); 
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51MPWnvSDn5Kl4m2VZSliaJKSEnOrPnwTiZGe6Mw7AluEyh6AFhdLn89aOERIJPRtt6iIsUpS2rBKF24rOx0peLDK001OK3292F')


// API 


// 
const app = express();


app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world') )

// app.get('/nik', (request, response) => response.status(200).send('nik world') )

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_Secret,
    })
})

exports.api = functions.https.onRequest(app)


// function api
//  http://127.0.0.1:5001/clone-ee684/us-central1/api