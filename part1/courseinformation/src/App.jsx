const Header = ({course}) => {
  console.log({course})
  return (
    <div>
      <h1>{course}</h1>
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
  console.log(props)
  return (
    <div>
      <p>
      Numbers of Exercises: {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content
      // Part of course information step 3 
        part1={course.parts[0].name} exercise1={course.parts[0].exercises}
        part2={course.parts[1].name} exercise2={course.parts[1].exercises}
        part3={course.parts[2].name} exercise3={course.parts[2].exercises}/>
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App