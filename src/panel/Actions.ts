import { WebRequestPayload } from "../types/Types";

export type AddWebRequestRowAction = {
  type: string;
  row: WebRequestPayload;
};

export type ClearAllWebRequestRowsAction = {
  type: string;
};

export type Action = AddWebRequestRowAction | ClearAllWebRequestRowsAction;

export const ADD_WEB_REQUEST_ROW = "ADD_WEB_REQUEST_ROW";
export const CLEAR_ALL_WEB_REQUESTS = "CLEAR_ALL_WEB_REQUESTS";

export const addWebRequestRowAction = (webRequest: WebRequestPayload): AddWebRequestRowAction => {
  return { type: ADD_WEB_REQUEST_ROW, row: webRequest };
};

export const clearAll = (): ClearAllWebRequestRowsAction => {
  return { type: CLEAR_ALL_WEB_REQUESTS };
};
