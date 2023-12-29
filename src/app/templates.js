
'use client';
import { useState } from 'react';
import Image from 'next/image'
import { useEffect } from "react";
import Styles from "../app/globals.css"
import Navbar from "./Componemnts/navbar.jsx"
import Button from "./Componemnts/button.jsx"
import ReactMarkdown from 'react-markdown'
import { templates } from './assets/templates';



export default function Page() {
  
  return <><Navbar /><main className='theme-dark'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css" defer></link>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js" defer></script>
      <h1>Discord resources — Templates</h1>
      <div style={
        {
          display:"flex",
          gap: "4px"
        }
      }>
      </div>
      <ReactMarkdown>{`# Statistics:\n` + "```diff\n+ Total templates:"+ Object.keys(templates).length + "\n+ Total usage of templates:"+ Object.values(templates).reduce((sum, obj) => sum + obj.usage_count, 0) + "\n```"}</ReactMarkdown>

      <div>
        {
          Object.values(templates).map((template,i)=> (
            <div key={i}>
              <ReactMarkdown>{`# [${template.name}](https://discord.new/${template.code})\n**Created at:** ${template.created_at}\n\n**Code:** `+ "`" + `${template.code}` + "`\n\n" + `**Updated at:** ${template.updated_at}\n\n**Used**: ${template.usage_count} Times\n\n**Created by:** ![pfp](https://cdn.discordapp.com/avatars/${template.creator.id}/${template.creator.avatar}.png?size=80) `+ "`"+`${template.creator.global_name ?? template.creator.username}` +"` `" + `${template.creator.id}` + "`"}</ReactMarkdown>
            </div>
          ))
        }

      </div>
      <script defer>hljs.highlightAll();</script>


    </main></>   
  
  
}
