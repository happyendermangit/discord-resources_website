
'use client';
import { useState } from 'react';
import Image from 'next/image'
import { useEffect } from "react";
import Styles from "../app/globals.css"
import Style_ from "../app/discord-theme.css"
import Navbar from "./Componemnts/navbar.jsx"
import Button from "./Componemnts/button.jsx"
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'



export default function Page() {
  
  return <><Navbar /><main className="theme-dark">
      <h1>Discord resources</h1>
      <ReactMarkdown>From **templates** to **assets**, or anything you could think of! discord officiel assets **``(Website not by discord)``**</ReactMarkdown>
      <div style={
        {
          display:"flex",
          gap: "4px"
        }
      }>
        <Link href="/templates"><Button text="Templates" color="primary" size="class" width="100px" height="40px" /></Link>
        <Link><Button text="Android app assets" color="secondary" size="class" width="100px" height="40px" /> </Link>
        </div>  
      <div>

      </div>
    </main></>   
  
  
}
