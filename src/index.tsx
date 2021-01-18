import ReactDOM from 'react-dom'
import { app } from './app'

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(app, document.querySelector('#root'))
