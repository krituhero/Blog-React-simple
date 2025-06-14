import { useState } from 'react'
import { BrowserRouter, Route, Link, Routes,useNavigate } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import Single_post from './components/Single_post'
import Blogs from './components/Blogs'
import Author_page from './components/Author_page'

function App() {
  const [count, setCount] = useState(0)

  return (
     <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Author" element={<Author_page />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog:id" element={<Single_post />} />
    </Routes>
  )
}

export default App
