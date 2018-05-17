import { injectReducer } from '../../store/reducers'
import 'bootstrap/dist/css/bootstrap.css'
export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const FirstPageContainer = require('./containers/FirstPageContainer').default
      const reducer = require('./modules/firstPage').default

      injectReducer(store, { key: 'firstPage', reducer })

      cb(null, FirstPageContainer)
    }, 'firstPage')
  }
})
