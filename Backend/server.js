import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js";
import userRoutes from "./Routes/user.routes.js";
import { app, server } from "./Socket/socket.js";

import connectToMongoDB from "./DB/connectToMongoDB.js";

// Variables

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

//Middlewares
app.use(express.json()); // to parse the incoming requests with json payloads
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

// Test routes
// app.get('/',(req,res)=>{
//     res.send('Hello world')
// })

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
