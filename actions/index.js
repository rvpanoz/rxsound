import config from "../config";
import { combineEpics, ofType } from "redux-observable";
import { mapTo, mergeMap, filter, catchError, switchMap } from "rxjs/operators";

///
const filters = [
  {
    name: "limit",
    value: 5
  },
  {
    name: "q",
    value: "lee burridge"
  }
];

const criteria = filters.reduce((acc, filterDet, idx) => {
  const joinValues = obj => Object.values(obj).join("=");
  return [...acc, joinValues(filterDet)];
}, []);
///

import {
  ADD_TRACKS,
  ADD_FILTER,
  FETCH_TRACKS_LOADING,
  FETCH_TRACKS_ERROR,
  FETCH_TRACKS_SUCCESS
} from "./types";

export const addTracks = tracks => ({
  type: ADD_TRACKS,
  loading: false,
  tracks
});

export const fetchTracksSuccess = tracks => ({
  type: FETCH_TRACKS_SUCCESS,
  loading: false,
  tracks
});

export const fetchTracksError = error => ({
  type: FETCH_TRACKS_ERROR,
  loading: false,
  tracks: [],
  error
});

export const fetchTracksStart = () => ({
  type: FETCH_TRACKS_LOADING,
  loading: true
});

export function addFilter(name, value) {
  return {
    type: ADD_FILTER,
    name,
    value
  };
}

const fetchTracksEpic = (action$, state$) =>
  action$.pipe(
    ofType(FETCH_TRACKS_LOADING),
    catchError(error =>
      of({
        type: FETCH_TRACKS_ERROR,
        payload: error.xhr.response,
        error: true
      })
    ),
    mergeMap(async () => {
      const url = `${config.searchUrl}?client_id=${
        config.client_id
      }&${criteria.join("&")}`;
      const response = await fetch(url);
      const tracks = await response.json();
      return fetchTracksSuccess(tracks);
    })
  );

export const rootEpic = combineEpics(fetchTracksEpic);
