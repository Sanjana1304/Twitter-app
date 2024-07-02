import React, { useState } from 'react'
import { Posts } from './Posts'
import { Link } from 'react-router-dom'

import apiReq from './apiReq'
export const Home = ({postData,setPostData,title,setTitle,postCont,setPostCont,search,setSearch,fetchError,setFetchError,searchTitle,setSearchTitle,revPostData,setRevPostData}) => {
    const API_URL = "http://localhost:8000/posts/";
    

    function handleSearch(e) {
        setSearchTitle("Your Results");
        setSearch(e.target.value);
        
    }
    console.log(postCont);

    const uploadTweet =async(e) =>{
        e.preventDefault();
        const updatedPosts = postData?postData.map((pD) =>(
            {...pD}
          )):[]

        const now = new Date();
        const dt = now.toLocaleString();

        const newTweet = {
            id: postData.length?(+postData[postData.length-1].id)+1:1,
            title:title,
            post:postCont,
            date:dt
        }
        
        updatedPosts.push(newTweet);
        setPostData(updatedPosts);
        setRevPostData(updatedPosts.slice().reverse());
        const postAction = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newTweet)
        }
        const result = await apiReq(API_URL,postAction);
        if (result) setFetchError(result);

        setTitle("");
        setPostCont("");

        // location.reload()

    }
  return (
    <div className='home'>
        <nav>
            <img src={`${process.env.PUBLIC_URL}/logo.webp`} alt="" width="90px" height="60px" />
            
            <ul>
                <li className='nav-items'><Link to="/" className='navig'>Home</Link></li>
                <li className='nav-items'><Link to="/explore" className='navig'>Explore</Link></li>
                <li className='nav-items'><Link to="/about" className='navig'>About</Link></li>
            </ul>
        </nav>
        <main className='main-home'>
            <h2 className='head'>Home</h2>
            <form className='newPostForm'>
                <label htmlFor="" >Create new Post</label>
                <br /><br />
                <input 
                id="post_title"
                    className="post-create-input" 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'/>
                <br />
                <textarea 
                    id="post_cont"
                    className="post-create-input" 
                    placeholder='Post' 
                    value={postCont}
                    onChange={(e) => setPostCont(e.target.value)}
                    cols="38"></textarea>
                
                <br />
                <button onClick={(e) => uploadTweet(e)}>Tweet</button>
            </form>
            <h2 className='head'>Posts</h2>
            <Posts 
                type={"mainp"} 
                searchval ={search}
                postData = {postData}
                setPostData = {setPostData}
                fetchError = {fetchError}
                setFetchError={setFetchError}
                revPostData = {revPostData}
                setRevPostData = {setRevPostData}></Posts>


        </main>
        <div className='searchPart'>
            <input 
                type="text" 
                className="search-input" 
                value={search}
                onChange={(e) => handleSearch(e)}
                placeholder='Search tweets' />
            <br /><br />
            <h1 className='head'>{searchTitle}</h1>
            <Posts 
                type={"trend"} 
                searchval ={search}
                postData = {postData}
                setPostData = {setPostData}
                fetchError={fetchError}
                setFetchError={setFetchError}
                revPostData = {revPostData}
                setRevPostData = {setRevPostData}></Posts>
        </div>
    </div>
  )
}
