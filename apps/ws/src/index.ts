import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", async (socket) => {
    await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        }
    })
    socket.send("Hello, WebSocket client!");
})