import React, { useEffect, useState } from 'react'
import { Post } from './Post';

export const Posts = ({type,searchval,postData,setPostData,fetchError,setFetchError,revPostData,setRevPostData}) => {

    

    //reversing the post's order so that the latest post is shown in the top
    

    

    const API_URL = "http://localhost:8000/posts/";
    useEffect(() =>{
        const fetchData = async() =>{
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error("Data couldn't be fetched");
    
                const data = await response.json();
    
                setPostData(data);
                setRevPostData(data.slice().reverse());
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
                <li key={post.id} className='post-list-item'><Post eachdata={post} /></li>
            ))}
        </ul>
        :
         <ul className='post-list'>
            {searchval? 
            revPostData.filter((post) =>(post.post.toLowerCase().includes(searchval.toLowerCase())) || post.title.toLowerCase().includes(searchval.toLowerCase())).map((post) => (
                <li key={post.id} className='post-list-item'><Post eachdata={post} /></li>
            ))
            :
            revPostData.filter((post) => (post.post.includes("#trend"))).map((post) => (
                <li key={post.id} className='post-list-item'><Post eachdata={post} /></li>
            ))}
        </ul>}
    </div>
  )
}
