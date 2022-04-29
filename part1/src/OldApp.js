import { useState } from "react"

const Button = ({handleClick, name}) => {
  console.log({name})
  return (
    <div>
      <button onClick={handleClick}>{name}</button>
    </div>
  )
}

const Statisticsline = ({text,value}) => {
  console.log({value})
  return (<tr><td>{text}</td> <td>{value}</td></tr>)
}

const Header = ({text}) => {
  console.log({text})
  return (<h1>{text}</h1>)
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad  
  const avg = (good + (-1*bad))
  const percentpos = ((good / all)*100)  + "%"

  if (all > 0) {
    return(
      <table>
        <Statisticsline text="Good:" value={good} />
        <Statisticsline text="Neutral:" value={neutral} />
        <Statisticsline text="Bad:" value={bad} />
        <Statisticsline text="All:" value={all} />
        <Statisticsline text="Avg:" value={avg} />
        <Statisticsline text="% positive:" value={percentpos} />
      </table>
    )
  }
  return (
    <>
      <p>No feedback given</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  
  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => {setGood(good + 1)}} name="good" />
      <Button handleClick={() => {setNeutral(neutral + 1)}} name="neutral" />
      <Button handleClick={() => {setBad(bad + 1)}} name="bad" />
      <Header text="statistics" />
      <Statistics good ={good} bad ={bad} neutral ={neutral} />
    </div>
  )
}

export default App