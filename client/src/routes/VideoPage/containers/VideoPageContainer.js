import { connect } from 'react-redux'
import VideoPage from '../components/VideoPage'
import { toggleVideo } from '../modules/videoPage'

const mapDispatchToProps = {
  toggleVideo
}

const mapStateToProps = (state) => ({
  selectedTrack: state.firstPage.selectedTrack,
  isVideoPlaying: state.videoPage.isVideoPlaying
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage)
