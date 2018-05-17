import React from 'react'
import FirstPageHeader from './FirstPageHeader'
import FirstPageBody from './FirstPageBody'
import PropTypes from 'prop-types'
import '../styles/firstPage.scss'

class FirstPage extends React.Component {
  render () {
    // console.log('FirstPage RESULTS' + this.props.results)

    return (
      <div className='firstPage-firstPageContainer'>
        <FirstPageHeader
          searchVideos={this.props.searchVideos}
          setSearchPhrase={this.props.setSearchPhrase}
          saveSearch={this.props.saveSearch}
          getTopSearches={this.props.getTopSearches}
          setModalOpen={this.props.setModalOpen}
          isModalOpen={this.props.isModalOpen}
          topSearches={this.props.topSearches}
          phrase={this.props.phrase}
         />
        { <FirstPageBody
          results={this.props.results}
          setSelectedTrack={this.props.setSelectedTrack}
         /> }

      </div>
    )
  }
}

FirstPage.propTypes = {
  searchVideos: PropTypes.func.isRequired,
  saveSearch: PropTypes.func.isRequired,
  setSearchPhrase: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired,
  topSearches: PropTypes.array.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  setSelectedTrack: PropTypes.func.isRequired,
  getTopSearches: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  phrase: PropTypes.string.isRequired,
}

export default FirstPage
