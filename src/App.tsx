import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from '@components/Header'
import Footer from '@components/Footer'
import NotFound from '@pages/NotFound'
import Home from '@pages/Home'
import Profile from '@pages/Profile'
import Contact from '@pages/Contact'
import Blog from '@pages/Blog'
import BlogView from '@pages/BlogView'
import BlogForm from '@pages/BlogForm'

function App() {
  const appStyle = {
    genDiv: 'flex flex-col min-h-screen',
    main: 'flex-grow',
  };

  return (
    <div className={appStyle.genDiv}>
      <Header />
      <main className={appStyle.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/blog" element={ <Blog /> }>
            <Route path="view" element={<BlogView />} />
            <Route path="form" element={<BlogForm />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
