import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './containers/app'
import List from './containers/list'
import Detail from './containers/detail'
// import User from './containers/user'
import NotFound from './containers/not-found'
// import Message from './containers/message'
import About from './containers/about'
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker'
import 'github-markdown-css'
import './index.css'

const __PROD__ = process.env.NODE_ENV === 'production' // eslint-disable-line

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

if (!__PROD__) {
  // window.Perf = require('react-addons-perf') // eslint-disable-line
  // require('why-did-you-update').whyDidYouUpdate(React)
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/topic/:id" component={Detail} />
          {/* <Route path="/user/:name" component={User} />*/}
          {/* <Route path="/messages" component={Message} />*/}
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
