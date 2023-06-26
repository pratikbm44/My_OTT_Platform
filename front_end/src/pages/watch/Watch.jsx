import { ArrowBackIosOutlined } from '@material-ui/icons'
// import {Link, useLocation } from 'react-router-dom/cjs/react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import React from 'react'
import "./watch.scss"

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className='watch'>
      <Link to="/">
        <div className="back">
            <ArrowBackIosOutlined/>
            Home
        </div>
        </Link>
        <video className='video'
         autoPlay 
         progress 
         controls 
         src={movie.video}/>
        
    </div>
  )
}
