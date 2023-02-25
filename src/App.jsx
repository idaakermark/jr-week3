import { useState, useEffect } from 'react'
import { parseISO, intervalToDuration } from "date-fns"
import './App.css'
import grad1 from "./assets/grad1.jpeg"
import grad2 from "./assets/grad2.jpeg"

function App() {

  const [ untilGraduation, setUntilGraduation ] = useState({})

  useEffect(() => {
    const intervalId = setInterval(() => {
      const graduationDay = parseISO ("2024-07-05T00:00:00")
      const interval = intervalToDuration({
        start: new Date(),
        end: graduationDay
      })
      setUntilGraduation(interval)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
    
  })
 
  return (
    <main className="App">

      <div className="title">
        <h1>Graduation:</h1>
        <p>Years: {untilGraduation.years} </p>
        <p>Months: {untilGraduation.months}</p>
        <p>Days: {untilGraduation.days}</p>
      </div>

      <div className="img-right">
        <img className ="img1" src={grad1} alt=""/>
        <p className = "img-title">Lorem ipsum dolor sit amet</p>
        <p className ="img1-txt">do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div>
      
      <div className="img-left">
        <img className ="img2" src ={grad2} alt=""/>
        <p className = "img-title">Lorem ipsum dolor sit amet</p>
        <p className ="img2-txt">do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <a href="https://dribbble.com/shots/17794648-Fonts-Layouts-7">Link to Design</a>
      </div>

    </main>
  );
}
export default App;
