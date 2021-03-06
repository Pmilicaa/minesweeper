import { takeLatest } from "redux-saga/effects";
import { setMap } from "../game/gameSlice";
import { take, put, call, apply, fork } from "redux-saga/effects";
import { WebSocketClient } from "../services/socket/WebSocketClient";
import { editMessage } from "../game/gameSlice";
import { GameAction } from "./gameTypes";
import { createSocketChannel } from "../services/socket/socketService";
import {
  CREATE_GAME_ACTION_TYPE,
  INITIALIAZE_GAME_ACTION_TYPE,
} from "../constants/actions";

function* getMap(socket: WebSocket) {
  yield apply(socket, socket.send, ["map"]);
}

export function* handleCreateGame(action: GameAction) {
  yield apply(WebSocketClient.getSocket(), WebSocketClient.getSocket().send, [
    action.payload,
  ]);
}

export function* handleInitializeGame(): any {
  const socket = yield call(WebSocketClient.createConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    try {
      const data = yield take(socketChannel);
      if (data.includes("map:")) {
        yield put(setMap(data));
      }
      if (data.includes("new:")) {
        yield fork(getMap, socket);
      }
      if (data.includes("open:")) {
        yield put(editMessage(data.split("open: ")[1]));
        yield fork(getMap, socket);
      }
    } catch (err) {
      console.error("socket error:", err);
      socketChannel.close();
    }
  }
}

export function* watchSaga() {
  yield takeLatest(INITIALIAZE_GAME_ACTION_TYPE, handleInitializeGame);
  yield takeLatest(CREATE_GAME_ACTION_TYPE, handleCreateGame);
}
