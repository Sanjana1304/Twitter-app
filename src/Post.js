import React from 'react'

export const Post = ({eachdata}) => {
  return (
    <div>
        <h3>{`#${eachdata.id}    `}{eachdata.title}</h3>
        <p className='post-date'>{eachdata.date}</p>
        <br />
        {eachdata.post.length<100? <p className='post-det'>{eachdata.post}</p>:<p className='post-det'>{eachdata.post.slice(0,100)}...</p>}
        
        <br /><br />
    </div>
  )
}
