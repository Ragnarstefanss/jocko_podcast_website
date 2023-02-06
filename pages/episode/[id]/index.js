import Image from "next/image";
import Header from "../../../components/Header"
import ShowEpisodeInfo from "../../../components/episode/ShowEpisodeInfo";
const Logo = require('../../../assets/no_image.jpg');
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowContentsDetails from "../../../components/episode/ShowContentsDetails";

export default function Movie({ episode_id}) {
  // //console.log("hello", characters)
  // const BASE_URL = "https://image.tmdb.org/t/p/original/";
  // //{adult, gender, id, known_for_department, name, original_name, popularity, profile_path, cast_id, character, credit_id, order}
  // const characters_cast = characters["cast"]
  // //{adult, gender, id, known_for_department, name, original_name, popularity, profile_path, credit_id, department, job})
  // const characters_crew = characters["crew"]
  
  const [content, setContent] = useState([]);
  const [summarize, setSummarizeContent] = useState([]);
  const [jsonData, setJsonDataContent] = useState([]);
  const [thumbnails, setThumbnailsContent] = useState([]);
  

  useEffect(() => {
      axios.get('/episodes/captions/' + episode_id + '.txt')
          .then(res => setContent(res.data.replace(/\n/g, "<br>")))
          .catch(error => console.error(error));
      
      axios.get('/episodes/summarize/' + episode_id + '.txt')
          .then(res => setSummarizeContent(res.data.replace(/\n/g, "<br>")))
          .catch(error => console.error(error));
        
      axios.get('/episodes/json/' + episode_id + '.json')
          .then(res => setJsonDataContent(res.data))
          .catch(error => console.error(error));
      
      axios.get('/episodes/thumbnails/' + episode_id + '.txt')
          .then(res => setThumbnailsContent(res.data))
          .catch(error => console.error(error));
  
  }, []);
  
  let episode_title = jsonData["title"]
  let episode_description = jsonData["description"]
  let episode_publishedAt = jsonData["publishedAt"]//.replace("T", " ").replace("Z", "")
  let episode_tags = jsonData["tags"]
 
  // var thumbnails_default = jsonData.thumbnails.maxres ? jsonData.thumbnails.maxres.url : jsonData.thumbnails.high.url
    
  console.log(jsonData.thumbnails)
  return (
    <>
      <Header />
      <div className="p-4">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col sm:flex-row">            
            <div className="sm:ml-4 sm:mr-4">
            
              <ShowEpisodeInfo title={episode_title} published_at={episode_publishedAt} description={episode_description} tags={episode_tags} />
               <Image width={960} height={540} src={ thumbnails ? `${thumbnails+"/maxresdefault.jpg" || thumbnails+"/sddefault.jpg"}` ||`${jsonData["thumbnails"].default.url}` : Logo} alt={episode_title} className="w-1/1 h-1/1 alignSelf: 'center'"/>
              
              {/* <Image width={960} height={540} src={ thumbnails_default } alt={episode_title} className="w-1/1 h-1/1 alignSelf: 'center'"/> */}
              
              <ShowContentsDetails title={"AI summary of episode"} content={summarize}/>
              
              <ShowContentsDetails title={"Most common words"} content={""}/>
              <Image width={960} height={540} src={ `${"/episodes/wordcloud/"+episode_id+".jpg"}` } alt={episode_title} className="w-1/1 h-1/1"/>
              
              <ShowContentsDetails title={"Episode transcript"} content={content} />
              
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export async function getServerSideProps(context) {
    const url_id = context.query.id
    return {
        props: {
            episode_id: url_id,
        },
    };
}