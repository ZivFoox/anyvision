import React from 'react'
import PropTypes from 'prop-types'
import '../styles/TrackDetail.scss'

class TrackDetail extends React.Component {
  render () {
    return (
      <div className='videoPage-TrackDetail'>
        <span className='videoPage-TrackDetailName'>{this.props.detailName}</span>
        <span className='videoPage-TrackDetailValue'>{this.props.detailValue}</span>
      </div>
    )
  }
}

TrackDetail.propTypes = {
  detailName: PropTypes.string.isRequired,
  detailValue: PropTypes.any.isRequired,
}

export default TrackDetail
