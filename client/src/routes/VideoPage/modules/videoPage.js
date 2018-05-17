// ------------------------------------
// Constants
// ------------------------------------
export const SET_PLAYING_VIDEO = 'SET_PLAYING_VIDEO'

// ------------------------------------
// Actions
// ------------------------------------
export function toggleVideo () {
  return {
    type: SET_PLAYING_VIDEO,
  }
}

export const actions = {
  toggleVideo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_PLAYING_VIDEO]    : (state, action) => {
    console.log('state.videoPage.isVideoPlaying', state)
    return { ...state, isVideoPlaying: !state.isVideoPlaying }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  results: [],
  isVideoPlaying: false
}
export default function videoPageReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
