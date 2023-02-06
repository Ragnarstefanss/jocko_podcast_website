import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Results({ }) {
    const [videos, setVideosContent] = useState([])
    useEffect(() => {
        axios.get('episodes/videos.json')
            .then(res => setVideosContent(res.data))
            .catch(error => console.error(error));
    
    }, []);

    // const arr = Array.isArray(results) ? results.map(result => (<Thumbnail key={result.id} result={result.snippet}/>)): [];
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-5">
            {videos.map(result => (<Thumbnail key={result.id} result={result}/>))}
        </FlipMove>
    );
}

export default Results