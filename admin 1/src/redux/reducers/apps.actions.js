import { ActionTypes } from "./apps.actionTypes";

export const AppsActions = {
  sendRequest: () => ({
    type: ActionTypes.SEND_REQUEST,
  }),

  objectsList: (data) => ({
    type: ActionTypes.OBJECT_LIST,
    payload: data,
  }),
  objectDetails: (data) => ({
    type: ActionTypes.OBJECT_GET,
    payload: data,
  }),
  objectCreate: (data) => ({
    type: ActionTypes.OBJECT_CREATE,
    payload: data,
  }),
  objectUpdate: (data) => ({
    type: ActionTypes.OBJECT_UPDATE,
    payload: data,
  }),
  objectDelete: (data) => ({
    type: ActionTypes.OBJECT_DELETE,
    payload: data,
  }),
  objectMessage: (data) => ({
    type: ActionTypes.MESSAGE_RESULT,
    payload: data,
  }),
};
