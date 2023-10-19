import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import LifeCycle from './LifeCycle.jsx'
import MyComponent from './assets/MyComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LifeCycle />
    <MyComponent />
  </React.StrictMode>,
)
