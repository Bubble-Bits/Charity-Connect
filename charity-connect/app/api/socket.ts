import { Server as HttpServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';



export default function SocketHandler(req: NextApiRequest, res: NextApiResponse) {
    // Create a separate HTTP server for WebSocket
  const httpServer = new HttpServer();
  const io = new SocketIOServer(httpServer);

  // Event handlers for WebSocket connections
  io.on('connection', (socket: Socket) => {
    socket.on('send-message', (obj) => {
      io.emit('receive-message', obj);
    });

    socket.on('typing', (data) => {
      io.emit('typing-notification', data);
    });

    socket.on('message-read', (messageId) => {
      io.emit('message-read-receipt', messageId);
    });
  });
}


