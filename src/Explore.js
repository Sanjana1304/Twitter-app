import React from 'react'
import { Posts } from './Posts'

export const Explore = ({search,postData,setPostData,fetchError,setFetchError,revPostData,setRevPostData}) => {
  return (
    <div>
      <h1>Explore All  Posts</h1>
      <br />
      <Posts 
                type={"mainp"} 
                searchval ={search}
                postData = {postData}
                setPostData = {setPostData}
                fetchError = {fetchError}
                setFetchError={setFetchError}
                revPostData = {revPostData}
                setRevPostData = {setRevPostData}></Posts>
    </div>
  )
}
