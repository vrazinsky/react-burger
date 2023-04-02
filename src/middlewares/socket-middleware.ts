import type { Middleware, MiddlewareAPI } from 'redux';

import type { AppDispatch, RootState } from '../store/store';
import { TWSFeedActions, TWSOrdersActions } from '../services/actions/socket-actions'
import { TActionsType } from '../utils/action-types'
export const socketMiddleware = (wsUrl: string, wsActions: TActionsType): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;


    return next => (action: TWSFeedActions | TWSOrdersActions) => {
      const { dispatch, } = store;
      const { type } = action;
      const { wsConnectionStart, wsConnectionClosed, wsConnectionError, wsConnectionSuccess, wsGetMessage } = wsActions;

      if (type === wsConnectionStart) {
        console.log('start')
        // объект класса WebSocket
        socket = new WebSocket(wsUrl);
      }
      if (socket) {

        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: wsConnectionSuccess, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: wsConnectionError, payload: event });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: wsGetMessage, payload: data });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: wsConnectionClosed, payload: event });
        };

        // if (type === 'WS_SEND_MESSAGE') {
        //   const message = payload;
        //   // функция для отправки сообщения на сервер
        //   socket.send(JSON.stringify(message));
        // }
      }

      next(action);
    };
  }) as Middleware;
}; 