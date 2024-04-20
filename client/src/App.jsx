import './App.css'
import Nav from './components/Nav/Nav'
import homeSplash from './homeSplash.jpg'

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
      


      {/* <Footer /> */}
    </>
  )
}

export default App
