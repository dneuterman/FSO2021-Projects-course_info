import React from 'react'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map( part =>
        <Part key={part.id} part={part} />
      )}
    </>
  )
}

const Part = (props) => {
  return <p>{props.part.name}: {props.part.exercises}</p>
}

const Total = (props) => {
  const total = props.exercises.reduce((a, b) => a + b, 0)

  return (<p>Total Exercises = {total}</p>)
}

const Course = ({ course }) => {
  return (
    <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total exercises={course.parts.map(part => part.exercises)} />
    </>
  )
}

export default Course