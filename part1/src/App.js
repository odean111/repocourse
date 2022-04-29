import { useState } from 'react'

const randomIntFromInterval = (min, max) => 
  { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const rndInt = () => {
  const num = randomIntFromInterval(1, 6)
  console.log(num)
  return num
}

const Button = ({handleClick, name}) => {
  return (
    <div>
      <button onClick={handleClick}>{name}</button>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState([0,0,0,0,0,0,0])

  const clickAnec = () => {
    const randomint = rndInt()
    setSelected(randomint)
  }

  const voteAnec = () => {
    console.log("The number to increase is " + selected)
    console.log("Old vote array: " + votes)

    const newArray = [...votes]
    newArray[selected] +=1
    setVote(newArray)
    
    console.log("New vote array: " + votes)
  }

  const getTopAnec = () => {
    const max = Math.max(...votes)
    const index = votes.indexOf(max)
    console.log(index)
    return index
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} </p>
      <p>{votes[selected]} votes </p>
      <Button handleClick={() => {voteAnec()}} name="vote" />
      <Button handleClick={() => {clickAnec()}} name="change anecdote" />
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[getTopAnec()]} </p>
    </div>
  )
}

export default App