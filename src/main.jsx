import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './pages/main'
// import App from './pages/product'
// import App from './pages/product/explore'
// import App from './pages/product/product'
import App from './pages/order'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
