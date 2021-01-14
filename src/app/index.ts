import createApp from './init/createApp'
import { store } from './init/createStore'
import initClient from './init/initClient'

const app = createApp()
initClient(store.dispatch)

export { app }
