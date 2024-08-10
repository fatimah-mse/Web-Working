import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Alert from './Components/Alert'
import BrowserCache from './pages/BrowserCache'
import URLarray from './data/URLarray'
import DNS from './pages/DNS'
import Server from './pages/Server'
import Respone from './pages/Respone'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import URLPage from './pages/URLPage'
import API from './pages/API'
  
function App() {

  useEffect(() => {
    const checkPageContent = () => {
      const bodyContent = document.body.innerText
      if (!bodyContent.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'الرجاء التحقق من الرابط.',
          text: 'الرابط المدخل غير صالح.',
        })
      }
    }
    checkPageContent()
  }, [])

  return (
    <>
    <URLarray />
    <Routes>
      <Route path="/" element={<Alert />} />
      <Route path="/main" element={<Main />} />
      <Route path="/cash" element={<BrowserCache />} />
      <Route path="/DNS" element={<DNS />} />
      <Route path="/server" element={<Server />} />
      <Route path="/response" element={<Respone />} />
      <Route path="/url-page" element={<URLPage />} />
      <Route path="/api" element={<API />} />
    </Routes>

    </>
  )
}

export default App
