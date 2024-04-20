import './App.css'
import Nav from './components/Nav/Nav'
import homeSplash from './homeSplash.jpg'
import Footer from './components/Footer/Footer'
import locationImg from './Location.jpg'

function App() {

  return (
    <>
      <Nav />
      <div className='splashImg'>
        <img src={homeSplash} />
        <div className='overlay'>
          <h1>Made fresh with authentic Texas flavor</h1>
          </div>
      </div>
      <h1 style={{textAlign: "center", fontFamily: "sans-serif", paddingTop: "15px"}}>Featured Items</h1>


      <div className='locationInfo'>
        <img className='locationImg' src={locationImg}></img>
        <div>
          <div>
            <div>
              <h1>Current Location</h1>
              <p>1234 Dallas Road Dallas, TX 75149</p>
            </div>
            <div>
              <h1>Today's Hours</h1>
              <p>11:30pm-7pm</p>
            </div>
          </div>
          <h2>Find our full hours and location schedule here!</h2>
        </div>
        
      </div>
      


      <Footer />
    </>
  )
}

export default App
