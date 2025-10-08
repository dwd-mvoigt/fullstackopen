const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div> 
  )
}

// Part of course information, step 2
const Part = (props) => {
  
  return (
    <div>
      {props.part}: {props.number}
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {/* Part of course information, step 2 */}
      <Part part={props.part1} number={props.exercise1}/>
      <Part part={props.part2} number={props.exercise2}/>
      <Part part={props.part3} number={props.exercise3}/>
      
      {/* Part of course information, step 1 */}
      {/* <p>{props.part1} - {props.exercise1}</p>
      <p>{props.part2} - {props.exercise2}</p>
      <p>{props.part3} - {props.exercise3}</p> */}
    </div> 

  )
} 

const Total = (props) => {
  return (
    <div>
      <p>
      Numbers of Exercises: {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercise1={exercises1}
        part2={part2} exercise2={exercises2}
        part3={part3} exercise3={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App