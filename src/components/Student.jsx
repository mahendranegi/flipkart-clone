import React, { useContext } from 'react'
import Subject from './Subject'
import { StudentContext } from '../ContextData'

function Student() {
    const student = useContext(StudentContext)
  return (
    <div style={{background: 'red',padding: 16,margin: '12px 0 0'}}>
        <h1>Student {student}</h1>
        <Subject />
        </div>
  )
}

export default Student