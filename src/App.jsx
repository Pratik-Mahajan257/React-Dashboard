import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Midbar from './Components/midbar/midbar'
import Lastbar from './Components/lastbar/lastbar'
function App () {
  return (
<div className="ap">
    <div className='App'>
      Lorem Ipsum is simply dummy text of the printing
      </div>
      <div className="aw">
      <div className='container'>
      <Sidebar />
        <div className='divide'>
          |
        </div>
        <Midbar />
        <div className='divide1'>
          |
        </div>
        <div className="other">
        <Lastbar/>
       </div>
       
        

      </div>
      </div>
     

    </div>

  )
}

export default App
