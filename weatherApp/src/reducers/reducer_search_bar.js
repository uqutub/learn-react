// note this will return Wheater Array

import { FETCH_WEATHER } from '../actions/action_search_bar';

export default function (state = [], action) {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_WEATHER:
      if (action.payload.cod === "404") {
        alert(action.payload.message);
        return state;
      }
      return [action.payload, ...state];
  }

  return state;
}