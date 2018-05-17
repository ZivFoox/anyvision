
import BackendUtility from '../../../utils/BackendUtility'
// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH_VIDEOS = 'SEARCH_VIDEOS'
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'
export const SET_TOP_SEARCHES = 'SET_SEARCH_TOP_SEARCHES'
export const SET_SEARCH_PHRASE = 'SET_SEARCH_PHRASE'
export const SET_SELECTED_TRACK = 'SET_SELECTED_TRACK'
export const SET_MODAL_OPEN = 'SET_MODAL_OPEN'

// ------------------------------------
// Actions
// ------------------------------------
export const searchVideos = async => (dispatch, getState) => {
  // async call

  let data
  BackendUtility.getItunesRequest(getState().firstPage.phrase)
  .then(function (response) {
    console.log('response', response)
    data = response.data
    console.log('about to call dispatch with ', data.results)
    dispatch(setResults(data.results))
  })
  .catch(function (error) {
    console.log(error)
  }

  )
}

export const saveSearch = () => (dispatch, getState) => {
  BackendUtility.setSearch(getState().firstPage.phrase)
  .then(function (response) {
    console.log('response', response)
  }, function (error) {
    console.log(error)
  })
  .catch(function (error) {
    console.log(error)
  }
  )
}

export const getTopSearches = () => (dispatch, getState) => {
  BackendUtility.getTopSearches()
  .then(function (response) {
    console.log('getTopSearches response', response.data)
    dispatch(setTopSearches(response.data))
  },
  function (error) {
    console.log(error)
  }
)
  .catch(function (error) {
    console.log(error)
  }
  )
}

export function setSearchPhrase (phrase) {
  return {
    type    : SET_SEARCH_PHRASE,
    payload : phrase
  }
}

export function setResults (results) {
  return {
    type    : SET_SEARCH_RESULTS,
    payload : results
  }
}

export function setTopSearches (topSearches) {
  return {
    type    : SET_TOP_SEARCHES,
    payload : topSearches
  }
}

export function setSelectedTrack (track) {
  return {
    type    : SET_SELECTED_TRACK,
    payload : track
  }
}

export function setModalOpen (isOpen) {
  return {
    type    : SET_MODAL_OPEN,
    payload : isOpen
  }
}

export const searchVideosApi = () => {
  return (dispatch, getState) => {
    return BackendUtility.getRequest()
  }
}

export const actions = {
  searchVideos,
  setSearchPhrase,
  setSelectedTrack,
  saveSearch,
  setModalOpen
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_SEARCH_RESULTS]    : (state, action) => {
    return { ...state, results: action.payload }
  },
  [SET_SELECTED_TRACK]    : (state, action) => {
    return { ...state, selectedTrack: action.payload }
  },
  [SET_SEARCH_PHRASE]    : (state, action) => {
    return { ...state, phrase: action.payload }
  },
  [SET_TOP_SEARCHES]    : (state, action) => {
    return { ...state, topSearches: action.payload }
  },
  [SET_MODAL_OPEN]    : (state, action) => {
    return { ...state, isModalOpen: action.payload }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  results: [],
  phrase: '',
  selectedTrack: null,
  selectedWord: '',
  topSearches: [],
  isModalOpen: false,
}
export default function firstPageReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
