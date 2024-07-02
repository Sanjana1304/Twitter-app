import React, { useEffect, useState } from 'react'
import { Post } from './Post';
import api from "./api/fetchCode"

export const Posts = ({type,searchval,postData,setPostData,fetchError,setFetchError,revPostData,setRevPostData}) => {
    
    useEffect(() =>{
        const fetchData = async() =>{
            try {
                const response = await api.get('/posts');
                setPostData(response.data);
                setRevPostData(response.data.slice().reverse());
                setFetchError(null);
            } catch (error) {
                setFetchError(error.message);
            }
        }
        (async () => await fetchData())()
    },[]);

    
  return (
    <div className='post-content'>
        {type==="mainp"?
        <ul className='post-list'>
            {revPostData.map((post) => (
                <li key={post.id} className='post-list-item'><Post eachdata={post} revPostData={revPostData} postData={postData} setPostData={setPostData} setRevPostData={setRevPostData}/></li>
            ))}
        </ul>
        :
         <ul className='post-list'>
            {searchval? 
            revPostData.filter((post) =>(post.post.toLowerCase().includes(searchval.toLowerCase())) || post.title.toLowerCase().includes(searchval.toLowerCase())).map((post) => (
                <li key={post.id} className='post-list-item'><Post eachdata={post} revPostData={revPostData} postData={postData} setPostData={setPostData} setRevPostData={setRevPostData} /></li>
            ))
            :
            revPostData.filter((post) => (post.post.includes("#trend"))).map((post) => (
                <li key={post.id} className='post-list-item'><Post eachdata={post} revPostData={revPostData} postData={postData} setPostData={setPostData} setRevPostData={setRevPostData}/></li>
            ))}
        </ul>}
    </div>
  )
}
