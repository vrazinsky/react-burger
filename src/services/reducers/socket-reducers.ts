import {
    WS_FEED_CONNECTION_SUCCESS,
    WS_FEED_CONNECTION_ERROR,
    WS_FEED_CONNECTION_CLOSED,
    WS_FEED_GET_MESSAGE,
    WS_ORDERS_CONNECTION_CLOSED,
    WS_ORDERS_CONNECTION_ERROR,
    WS_ORDERS_CONNECTION_SUCCESS,
    WS_ORDERS_GET_MESSAGE
} from '../../utils/action-types';
import { TWSFeedActions, TWSOrdersActions } from '../actions/socket-actions'
import { TFeedMessage } from '../../types/types'
//import type { IMessage } from '../types';



type TWSFeedInitialState = {
    wsConnected: boolean;
    //messages: IMessage[];
    message: TFeedMessage;

    error?: Event;
}

type TWSOrdersInitialState = {
    wsConnected: boolean;
    //messages: IMessage[];
    message: TFeedMessage;

    error?: Event;
}

const feedInitialState: TWSFeedInitialState = {
    wsConnected: false,
    message: { success: false, orders: [], total: 0, totalToday: 0 }
};

const ordersInitialState: TWSOrdersInitialState = {
    wsConnected: false,
    message: { success: false, orders: [], total: 0, totalToday: 0 }
};

export const wsFeedReducer = (state = feedInitialState, action: TWSFeedActions): TWSFeedInitialState => {
    switch (action.type) {
        case WS_FEED_CONNECTION_SUCCESS:
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };
        case WS_FEED_CONNECTION_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };
        case WS_FEED_CONNECTION_CLOSED:
            return {
                ...state,
                error: undefined,
                wsConnected: false
            };
        case WS_FEED_GET_MESSAGE:
            return {
                ...state,
                error: undefined,
                message: JSON.parse(action.payload)
            };
        default:
            return state;
    }
};

export const wsOrdersReducer = (state = ordersInitialState, action: TWSOrdersActions): TWSOrdersInitialState => {
    switch (action.type) {
        case WS_ORDERS_CONNECTION_SUCCESS:
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };
        case WS_ORDERS_CONNECTION_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };
        case WS_ORDERS_CONNECTION_CLOSED:
            return {
                ...state,
                error: undefined,
                wsConnected: false
            };
        case WS_ORDERS_GET_MESSAGE:
            return {
                ...state,
                error: undefined,
                message: JSON.parse(action.payload)
            };
        default:
            return state;
    }
}; 