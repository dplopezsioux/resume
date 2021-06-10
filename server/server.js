"use strict";
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

//
//
//      Config global vari,json urlencoded, cors
//
//
app.set("port", process.env.Port || 3000);
app.set("emailUser", process.env.emailUser || "email@adress");
app.set("emailPass", process.env.emailPass || "single-password-aplication");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//
//
//
//      config html and public folder
//
//
//
app.use(express.static("public"));
app.set("view engine", "ejs");
//
//
//     render front page!
//
//
app.get("/", function (req, res) {
  res.render("pages/index");
});
//
//
//
//      load skill
//
//
//
const dataS = require("./skill");
//
//
//
//      api configuration
//
//
//
app.get("/api", (req, res) => {
  res.status(200).json({ mens: "Welcome to my rest API" });
});
app.get("/api/skill", (req, res) => {
  return res.send(dataS);
});
//
//
//      send email from API
//
//
//
app.get("/api/contact", (req, res) => {
  let email = req.query.email;
  let mens = req.query.mens;
  console.log(email, mens);
  sendEmail(email, mens);
  res.end();
});
//
//
//      email config
//
//
const nodemailer = require("nodemailer");
//
//
//      import html Email funcion
//
//
const htmlMes = require("./email/email");
//
//
//      send email funcion
//
//
async function sendEmail(email, mens) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: app.get("emailUser"), // form .env
      pass: app.get("emailPass"), // from .env
    },
  });
  let info = await transporter.sendMail({
    from: "<dplopez.sioux@gmail.com>",
    to: `dplopez.sioux@icloud.com, ${email}`,
    subject: "Hi! Confirmation email from dpinformation.me",
    html: htmlMes(email, mens), // html body from email funcion
  });
}

app.listen(app.get("port"), () => {
  console.log(`Server is runing on port: ${app.get("port")}`);
});
