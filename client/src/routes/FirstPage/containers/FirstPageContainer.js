import { connect } from 'react-redux'
import { searchVideos,
  setSearchPhrase,
  setSelectedTrack, saveSearch,
  getTopSearches,
  setModalOpen } from '../modules/firstPage'

import FirstPage from '../components/FirstPage'

const mapDispatchToProps = {
  searchVideos,
  saveSearch,
  setSearchPhrase,
  setSelectedTrack,
  getTopSearches,
  setModalOpen,
}

const mapStateToProps = (state) => ({
  results: state.firstPage.results,
  isModalOpen: state.firstPage.isModalOpen,
  topSearches: state.firstPage.topSearches,
  phrase: state.firstPage.phrase
})

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage)
