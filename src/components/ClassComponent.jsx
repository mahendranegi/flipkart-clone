import React from 'react'
import Student from './Student'
import {StudentContext} from '../ContextData'

function ClassComponent() {
  return (
    <div style={{background: 'cyan',padding:16,margin: '12px 0 0'}}>
    <h1>Class Component</h1>
     <StudentContext.Provider value='Amit Singh'>
    <Student  />
    </StudentContext.Provider>
    </div>
  )
}

export default ClassComponent