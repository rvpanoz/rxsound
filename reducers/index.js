import {
  ADD_FILTER,
  ADD_TRACKS,
  FETCH_TRACKS_LOADING,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_ERROR
} from "../actions/types";
import initialState from "../store/initialState";

import {
  identity,
  merge,
  evolve,
  assoc,
  propOr,
  prop,
  prepend,
  contains,
  remove
} from "ramda";

const handlers = {
  [ADD_TRACKS]: (state, action) => assoc("tracks", action.tracks, state),
  [ADD_FILTER]: (state, action) => {
    const { name, value } = action;
    const r = merge(state, {
      filters: prepend(
        {
          name,
          value
        },
        state.filters
      )
    });

    return r;
  },
  [FETCH_TRACKS_LOADING]: (state, action) =>
    assoc("loading", action.loading, state),
  [FETCH_TRACKS_SUCCESS]: (state, action) =>
    merge(state, { tracks: action.tracks, loading: action.loading }),
  [FETCH_TRACKS_ERROR]: (state, action) =>
    merge(state, {
      loading: action.loading,
      error: action.error,
      tracks: action.tracks
    })
};

const createReducer = (state, handlers) => (state = initialState, action) =>
  propOr(identity, prop("type", action), handlers)(state, action);

export default createReducer(initialState, handlers);
