import './App.css'
import './static/css/global.css'
import MainSection from './components/MainSection'
import withLoading from './components/HOC/withLoading'


function App() {
  return (
    <main>
      <MainSection />
    </main>
  )
}

export default withLoading(App)