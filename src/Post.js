import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import api from "./api/fetchCode"
export const Post = ({eachdata,revPostData,postData, setPostData,setRevPostData}) => {

  const deletePost = async(id) =>{
    await api.delete(`/posts/${id}`);
    const postsList = postData.filter((post) =>(post.id!==id));
    setPostData(postsList);
    setRevPostData(postsList.slice().reverse());

  }
  return (
    <div>
        <div className='title-trash'>
          <h3>{`#${eachdata.id}       `}{eachdata.title}</h3>
          <FaTrashAlt 
                className='trash-can'
                  role='button'
                  onClick={()=>(deletePost(eachdata.id))}
                  tabIndex="0"/>
        </div>
        <p className='post-date'>{eachdata.date}</p>
        <br />
        {eachdata.post.length<100? <p className='post-det'>{eachdata.post}</p>:<p className='post-det'>{eachdata.post.slice(0,100)}...</p>}
        
        <br /><br />
    </div>
  )
}
