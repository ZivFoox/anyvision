import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import '../styles/FirstPageHeader.scss'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

Modal.setAppElement('body')

class FirstPageHeader extends Component {
  _searchMusicVideos = () => {
    this.props.searchVideos()
    this.props.saveSearch()
  }

  _getTopSearches = () => {
    this.props.getTopSearches()
    this.props.setModalOpen(true)
  }
  _setSearchPhrase = (phrase) => {
    this.props.setSearchPhrase(phrase.target.value)
  }

  render () {
    const topSearches = this.props.topSearches
    console.log(topSearches)
    const listItems = topSearches.map((item) => <li key={item._id}>{item.name} ({item.timesSearched} times)</li>)
    return (
      <div className='FirstPageHeader-FirstPageHeaderContainer'>
        <Modal
          isOpen={this.props.isModalOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='Top Searches'
        >
          <h2>Top searches</h2>
          <h5>We wonder if you like any of these...</h5>
          {listItems}
          <span
            className='FirstPageHeader-closeModalSpan'
            onClick={() => this.props.setModalOpen(false)}
          >
          Close
          </span>
        </Modal>

        <span
          className='FirstPageHeader-topSearchesSpan'
          onClick={this._getTopSearches}
        >Check out our top 10 searches</span>
        <input className='FirstPageHeader-inputForSearch'
          type='text'
          onChange={this._setSearchPhrase}
          value={this.props.phrase}
        />
        <button className='btn btn-primary' onClick={this._searchMusicVideos}>
        Search For Some Music!
        </button>
      </div>
    )
  }
}

FirstPageHeader.propTypes = {
  searchVideos: PropTypes.func.isRequired,
  setSearchPhrase: PropTypes.func.isRequired,
  saveSearch: PropTypes.func.isRequired,
  getTopSearches: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  topSearches: PropTypes.array.isRequired,
  phrase: PropTypes.string.isRequired,
}

export default FirstPageHeader
