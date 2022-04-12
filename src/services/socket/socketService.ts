import { eventChannel } from "@redux-saga/core";
import { ServerResponse } from "./socketTypes";

export function createSocketChannel(socket: WebSocket) {
  return eventChannel((emit) => {
    const handleOnMessage = (event: ServerResponse) => {
      emit(event.data);
    };

    const errorHandler = (errorEvent: unknown) => {
      emit(new Error((errorEvent as Error).message || "UNKNOWN"));
    };

    socket.addEventListener("message", handleOnMessage);
    socket.addEventListener("error", errorHandler);

    const unsubscribe = () => {
      socket.removeEventListener("message", handleOnMessage);
    };

    return unsubscribe;
  });
}
