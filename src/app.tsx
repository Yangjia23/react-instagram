import React from 'react'
import Header from '@comps/Header'

interface IProps {
  name: string
  age: number
}

function App(props: IProps) {
  const { name, age } = props
  return (
    <div className='app'>
      <span>{`Hello! I'm ${name}, ${age} years old.`}</span>
      <Header />
    </div>
  )
}

export default App
