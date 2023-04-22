
import './App.css'
import Eyeballside from './components/Eyeballside'
import MainBox from './components/MainBox'
function App() {
  

  return (
    <div className="min-w-full h-[100%]">
      <div className="flex justify-between">
        <Eyeballside/>
        <MainBox/>
        <Eyeballside/>
      </div>
    </div>
  )
}

export default App
