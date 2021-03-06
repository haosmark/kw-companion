import * as actionTypes from './types';
import { WebBrowser } from 'expo';
/* app_actions controls app elements, such as visibility of various app options */

// controls toggling of the modal menu when a player list item is pressed
export const togglePLSelectedItemModal = (selectedPlayerId = null, showViewRoomButton = true) => dispatch => {
  //await WebBrowser.openBrowserAsync('http://www.shatabrick.com/cco/kw/index.php?g=kw&a=sp&id=' + action.id)
  return dispatch({
    type: actionTypes.TOGGLE_PLAYER_LIST_ITEM_MODAL,
    selectedPlayerId,
    showViewRoomButton
  })
}

// controls toggling of Player List's options sub-menu
export const togglePLOptionsBar = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_PLAYER_SCREEN_OPTIONS })
}

// open shatabrick with device's default browser
export const openShatabrick = (playerId) => async dispatch => {
  await WebBrowser.openBrowserAsync('http://www.shatabrick.com/cco/kw/index.php?g=kw&a=sp&id=' + playerId);
  return dispatch({ type: actionTypes.VIEW_SHATABRICK });
}

// navigate to room details
export const selectPlayer = (playerId) => dispatch => {
  return dispatch({ type: 'SELECT_PLAYER', playerId });
}

export const selectRoom = (roomId) => dispatch => {
  return dispatch({ type: 'SELECT_ROOM', roomId });
}