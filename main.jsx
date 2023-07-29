import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './src/components/index.css'
import ItemList from './src/components/ItemList.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <App />,
    <ItemList/>
    </div>
)
