import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { Fabric } from 'office-ui-fabric-react'
import App from './components/App'

const Shell = () =>  (
  <Fabric>
    <App/>
  </Fabric>
)

ReactDOM.render(<Shell />, document.getElementById('root'))
registerServiceWorker()
