import express, { Router } from "express";
import connection from "./database/db.js";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";
import defaultdata from "./default.js";
import router from "./routes/route.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);
PORT = process.env.PORT || 8000;
const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;
connection(USERNAME, PASSWORD);
app.listen(8000, ()=> console.log(`server is running at ${PORT} port`));

defaultdata();


export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;   
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;

paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;

paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
paytmParams['EMAIL'] = 'lovingh161998@gmail.com';
paytmParams['MOBILE_NO'] = '1234567890'; 
