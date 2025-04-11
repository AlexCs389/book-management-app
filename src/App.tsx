import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/books" element={<CreateBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
