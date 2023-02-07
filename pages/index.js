import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import tmdb from "../public/tmdb.svg";


export default function Home({ }) {

  // .replace(/\n/g, "<br>")
  return (
    <div>
      <Head>
        <title>Jocko Podcast Transcripts</title>
        <meta name="description" content="Jocko Willink and Director, Echo Charles podcastranscripts" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="https://ragnarsmedia-jocko-podcast.netlify.app/screenshot.png" />
        <meta property="og:image:url" content="https://ragnarsmedia-jocko-podcast.netlify.app/screenshot.png"/>
        <meta name="twitter:image" content="https://ragnarsmedia-jocko-podcast.netlify.app/screenshot.png" /> 
        <meta property="og:image:type" content="image/png"/>
        <meta property="og:image:width" content="1024"/>
        <meta property="og:image:height" content="1024"/>
      </Head>
      <Header />
      {/* <Nav /> */}
      <Results />
    </div>
  );
}
