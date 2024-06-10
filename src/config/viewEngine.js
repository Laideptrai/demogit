
import express from "express";
let configViewEngine = (app) => {
    //arrow function
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}

module.exports = configViewEngine; // dùng để có thể sử dụng hàm config bên ngoài config