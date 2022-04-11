const SOCKET_ENDPOINT: string = (process.env.REACT_APP_SOCKET_ENDPOINT as string);

type Socket = WebSocket
class WebSocketClient {
  private static _socket: Socket;

  public static getSocket() {
    return this._socket;
  }

  public static setSocket(socketConnection: Socket) {
    this._socket = socketConnection;
  }

  public static createConnection(url: string = SOCKET_ENDPOINT) {
    console.log(SOCKET_ENDPOINT);

    if (WebSocketClient.getSocket()) {
      return WebSocketClient.getSocket();
    }
    const socketConnection = new WebSocket(url);
    WebSocketClient.setSocket(socketConnection);
    console.log(socketConnection);
    return WebSocketClient.getSocket();
  }
}

export {WebSocketClient};

