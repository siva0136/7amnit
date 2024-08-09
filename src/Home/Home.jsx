"use client"
import React from 'react'
import style from './Home.module.css'
import { Accordion } from 'react-bootstrap'
import AccordionComponent from '@/common/commponents/AccordionComponent/AccordionComponent'
import players from './includes/players.json' 
const Home = () => {
  return (
    <div>
        <h1 className='text-center'>This a home page</h1>
        <AccordionComponent data={players}/>
    </div>
  )
}

export default Home
