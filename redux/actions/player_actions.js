import * as actionTypes from './types'
import { fetchDataAsync } from '../../api'

export const fetchPlayerListAsync = () => async dispatch => {
  dispatch({ type: actionTypes.REQUEST_DATA })
  const data = await fetchDataAsync()
  
  try {
    dispatch({ type: actionTypes.FETCH_PLAYERS, payload: data.playerList })
  } catch (err) {
    dispatch({ type: actionTypes.DATA_REQUEST_ERROR, payload: err.message })
  }
}

export const filterPlayers = (filterType, playerList) => async dispatch => {
  return dispatch({ type: actionTypes.FILTER_PLAYERS, playerList, filterType})
}

export const toggleOptionsBar = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_PLAYER_SCREEN_OPTIONS })
}