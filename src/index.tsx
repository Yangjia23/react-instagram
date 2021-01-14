import ReactDOM from 'react-dom'
import { app } from './app'

if (module && module.hot) {
  module.hot.accept()
}
console.log('app', app)

ReactDOM.render(app, document.querySelector('#root'))
