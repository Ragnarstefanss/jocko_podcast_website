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
      </Head>
      <Header />
      {/* <Nav /> */}
      <Results />
    </div>
  );
}
