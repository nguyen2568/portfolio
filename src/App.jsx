import { Home, About } from './views'
import { Navbar } from './components'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <Navbar/>
        <main className="container mx-auto px-4 pt-20">
          <Home />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
