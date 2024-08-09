"use client"
import React, { useState } from 'react'
import style from './About.module.css'
import Button from '@mui/material/Button';
import TableComponent from '@/common/commponents/TableComponent/TableComponent';
import { Loader } from '@/common/commponents/Loader';

const About = () => {
    const[isShowLoader,setIsShowLoader]=useState(false)
   const [data,setData]=useState([])
    const fnHandelGetPost= async()=>{        
        try{
            setIsShowLoader(true)
            const data= await fetch('https://jsonplaceholder.typicode.com/posts',{method:'get'});
            const resData = await data.json();  
            setData(resData)
            // console.log(resData)
            setIsShowLoader(false)
        }catch(ex){
            console.log(ex)
        }finally{
            setIsShowLoader(false)
        }
      
    }
  return (
    <div>
        <h1 className='text-center my-3'>This a About Page</h1>   
        <div>
        <Button variant="outlined" onClick={fnHandelGetPost}>Get Posts</Button>
        {
            data?.length >0 && <TableComponent headings={["ID","TITLE","BODY"]} rows={data} coulums={["id","title","body"]}/>
        }
        {isShowLoader && <Loader/>}
        
        </div>
    </div>
  )
}

export default About
