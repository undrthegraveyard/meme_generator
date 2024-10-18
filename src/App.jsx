import './App.less'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {

  return (
    <div className='meme-container'>
      <Header />
      <MainContent />
    </div>
  )
}

export default App
if (import.meta.hot) {
  import.meta.hot.accept()
}

console.log(`App.jsx ran ${new Date().toLocaleTimeString()}`)

// FUCK YOU VITE!