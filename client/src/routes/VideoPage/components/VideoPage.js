import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import TrackDetail from './TrackDetail'
import '../styles/videoPage.scss'
import pausePlayIcon from '../../../img/pause-play-button.png'
import goBackIcon from '../../../img/goback.png'
import { formatDate } from '../../../utils/DateUtil'
import { browserHistory } from 'react-router'

class VideoPage extends React.Component {
  _playOrPause = () => {
    this.props.toggleVideo()
  }
  _goBack = () => {
    browserHistory.goBack()
  }

  render () {
    return (
      <div className='videoPage-videoPageContainer'>
        <div className='videoPage-trackDetails'>
          <TrackDetail
            detailName='Track name:'
            detailValue={this.props.selectedTrack.trackName}
        />
          <TrackDetail
            detailName='Collection name:'
            detailValue={this.props.selectedTrack.collectionName}
        />
          <TrackDetail
            detailName='Release date:'
            detailValue={formatDate(new Date(this.props.selectedTrack.releaseDate))}
        />
          <TrackDetail
            detailName='Price:'
            detailValue={this.props.selectedTrack.trackPrice}
        />
        </div>
        <div
          className='videoPage-playerContainer'
        >
          <ReactPlayer
            url={this.props.selectedTrack.previewUrl}
            playing={this.props.isVideoPlaying} />

          <img
            className='videoPage-pausePlayIconContainer'
            onClick={this._playOrPause}
            src={pausePlayIcon}
            alt='Play or pause' />

        </div>
        <img
          className='videoPage-backIcon'
          onClick={this._goBack}
          src={goBackIcon}
          alt='Back' />

      </div>
    )
  }
}

VideoPage.propTypes = {
  selectedTrack: PropTypes.object.isRequired,
  toggleVideo: PropTypes.func.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired,
}

export default VideoPage
