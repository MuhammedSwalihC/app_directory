import { initialStates } from "./apps.initialState";
import { ActionTypes } from "./apps.actionTypes";

export const appsReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case ActionTypes.SEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.OBJECT_LIST:
      if (payload.data.hasOwnProperty("items")) {
        state["next"] = payload.data.next;
        state["previous"] = payload.data.previous;
        state["total"] = payload.data.total;
        state["current"] = payload.data.current;
        state["columns"] = payload.data.columns;
        state[payload.fields] = payload.data.items;
      } else {
        state[payload.fields] = payload.data;
      }
      if (payload.clearField) {
        state[payload.clearField] = null;
      }
      return {
        ...state,
        loading: false,
        errorMessage: null,
        successMessage: null,
      };

    case ActionTypes.OBJECT_CREATE:
      const data = payload.data.hasOwnProperty(payload.fields)
        ? payload.data[payload.fields]
        : payload.data;
      if (Array.isArray(state[payload.fields])) {
        state[payload.fields] = [...state[payload.fields], data];
      } else {
        state[payload.fields] = data;
      }
      state["successMessage"] = payload.message;
      return {
        ...state,
        loading: false,
        errorMessage: null,
      };
    case ActionTypes.OBJECT_UPDATE:
      state[payload.fields] = payload.data.hasOwnProperty(payload.fields)
        ? payload.data[payload.fields]
        : payload.data;
      state["successMessage"] = "updated";
      return {
        ...state,
        loading: false,
        errorMessage: null,
      };

    default:
      return state;
  }
};
