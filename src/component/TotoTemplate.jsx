import React from 'react'

 const TotoTemplate = ({children}) => {

  return (
    <div className='Todotemplate'>
<div className="app-title">일정 괸리</div>     
<div className="content">{children}</div>   
        </div>
  )
}


export default TotoTemplate