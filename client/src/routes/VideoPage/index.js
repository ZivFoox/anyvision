import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'videoPage',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const VideoPageContainer = require('./containers/VideoPageContainer').default
      const reducer = require('./modules/videoPage').default

      injectReducer(store, { key: 'videoPage', reducer })

      cb(null, VideoPageContainer)
    }, 'videoPage')
  }
})
