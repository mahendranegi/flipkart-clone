import React, { useContext } from 'react'
import { SubjectContext } from '../ContextData'

function Subject() {
    const subject = useContext(SubjectContext)
  return (

    <div style={{padding:16,background: 'pink'}}>
        <h1>Subject is: {subject}</h1>
    </div>
  )
}

export default Subject