import WebSocket, { WebSocketServer } from 'ws';
import { L2Block } from '@cryptochords/shared';

const BroadcastToClients = (wss: WebSocketServer, l2Block: L2Block): void => {
  wss.clients.forEach((client: WebSocket) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(l2Block.toJSON()));
    }
  });
};

export default BroadcastToClients
