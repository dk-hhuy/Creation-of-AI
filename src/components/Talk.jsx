import React from 'react'

const Talk = ({ className, title }) => {
  return (
    <div>
        <h6 className={className}>{title}</h6>
    </div> 
  )
}

export default Talk