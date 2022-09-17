import React from 'react';
import "./Blog.css"
import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch"
const Blog = () => {
    const {id}=useParams();
    const url=`http://localhost:8000/BlogsJsonDB/`+id;
    const {error,loading,data}=useFetch(url);
    return (
        <div className='blog'>
            {error && <p className='error'>{error}</p>}
            {loading && <p className='loading'>Loading...</p>}
            {data &&(
                <>
                <h2 className='page-title'>{data.title}</h2>
                <p className='time'>Reading time : {data.readableTime}</p>
                <ul>
                    {data.categories.map((item)=>(
                        <li key={item}>{item}</li>))}
                </ul>
                <p className='info'>{data.description}</p>
                </>
                )}
        </div>
    );
}

export default Blog;
