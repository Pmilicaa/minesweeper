import { takeLatest } from "redux-saga/effects";
import { createGame, initialiazeGame } from "../game/gameSlice";
import { take, call, apply } from "redux-saga/effects";
import { WebSocketClient } from "../services/socket/WebSocketClient";
import { GameAction } from "./gameTypes";
import { createSocketChannel } from "../services/socket/socketService";

export function* handleCreateGame(action: GameAction) {
  yield apply(WebSocketClient.getSocket(), WebSocketClient.getSocket().send, [
    action.payload,
  ]);
}

export function* handleInitializeGame(): any {
  const socket: any = yield call(WebSocketClient.createConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    try {
      const data = yield take(socketChannel);
      console.log(data);
    } catch (err) {
      console.log("socket error:", err);
      socketChannel.close();
    }
  }
}

export function* watchSaga() {
  yield takeLatest(initialiazeGame.type, handleInitializeGame);
  yield takeLatest(createGame.type, handleCreateGame);
}
