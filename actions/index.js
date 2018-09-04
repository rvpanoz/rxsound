import {
  ADD_FILTER,
  FETCH_TRACK_LOADING,
  FETCH_TRACK_ERROR,
  FETCH_TRACK_SUCCESS
} from "./types";

export const fetchTrackSuccess = track => ({
  type: FETCH_TRACK_SUCCESS,
  loading: false,
  track
});

export const fetchTracksError = error => ({
  type: FETCH_TRACK_ERROR,
  loading: false,
  tracks: [],
  error
});

export const fetchTrackStart = url => ({
  type: FETCH_TRACK_LOADING,
  loading: true,
  url
});

export function addFilter(name, value) {
  return {
    type: ADD_FILTER,
    name,
    value
  };
}
