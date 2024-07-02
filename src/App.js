import { Home } from "./Home";
import { Route,Routes } from "react-router-dom";
import { About } from "./About";
import { Explore } from "./Explore";
import { useState } from "react";


function App() {
  const [postData,setPostData] = useState([]);
    const [title,setTitle] = useState("");
    const [postCont,setPostCont] = useState("");
    const [search,setSearch] = useState("");
    const [fetchError,setFetchError] = useState(null);
    const[searchTitle,setSearchTitle] = useState("Trends for you");
    const [revPostData,setRevPostData] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home 
                                    postData={postData}
                                    setPostData={setPostData}
                                    title={title}
                                    setTitle={setTitle}
                                    postCont={postCont}
                                    setPostCont={setPostCont}
                                  search={search}
                                  setSearch={setSearch}
                                fetchError={fetchError}
                                setFetchError = {setFetchError}
                                setSearchTitle = {setSearchTitle}
                                revPostData={revPostData}
                                setRevPostData={setRevPostData}
                              searchTitle={searchTitle}  />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/explore" element={<Explore
                                          search ={search}
                                          postData = {postData}
                                          setPostData = {setPostData}
                                          fetchError = {fetchError}
                                          setFetchError={setFetchError}
                                          revPostData = {revPostData}
                                          setRevPostData = {setRevPostData} />}/>
      </Routes>
      
    </div>
  );
}

export default App;
