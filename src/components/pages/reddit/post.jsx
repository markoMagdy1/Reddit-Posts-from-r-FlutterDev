import React from 'react'

export const Post = ({post}) => {
  return (
    <div className='post'>
         <a href={`${post.data.url}`} target="_blank" rel="noopener noreferrer">{post.data.title} </a>
         <div>{post.data.selftext}</div>
    </div>
  )
}
