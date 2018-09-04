import {
  ADD_FILTER,
  FETCH_TRACK_LOADING,
  FETCH_TRACK_ERROR,
  FETCH_TRACK_SUCCESS
} from "../actions/types";

import config from "../config";
import { combineEpics, ofType } from "redux-observable";
import { mapTo, mergeMap, filter, catchError, switchMap } from "rxjs/operators";

import { fetchTrackSuccess, fetchTrackError } from "../actions";

const fetchTrackEpic = (action$, state$) =>
  action$.pipe(
    ofType(FETCH_TRACK_LOADING),
    catchError(error =>
      of({
        type: FETCH_TRACK_ERROR,
        payload: error.xhr.response,
        error: true
      })
    ),
    switchMap(action => {
      const url = `${config.resolveUrl}?client_id=${config.client_id}&url=${
        action.url
      }`;

      fetch(url)
        .then(async response => {
          const data = await response.json();
          fetchTrackSuccess(data);
        })
        .catch(err => fetchTrackError(err));
    })
  );

export const rootEpic = combineEpics(fetchTrackEpic);
