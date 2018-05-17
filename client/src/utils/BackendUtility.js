import axios from 'axios'
import { API_URL, APPLE_URL } from './urlConstants'

function getItunesRequest (searchPhrase) {
  return axios.get(APPLE_URL + `/search?term=` + searchPhrase + `&entity=musicVideo`)
}

function getTopSearches () {
  return axios.get(API_URL + `/words`)
}

function setSearch (searchPhrase) {
  return axios.post(API_URL + `/words/increment`, { name: searchPhrase })
}

export default { getItunesRequest, setSearch, getTopSearches }
