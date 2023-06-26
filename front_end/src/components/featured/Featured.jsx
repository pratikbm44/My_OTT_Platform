import React, { useEffect, useState} from "react";
import "./featured.scss"
import { InfoOutlined, PlayArrow } from "@material-ui/icons"  
import axios from "axios";

import { Link } from "react-router-dom";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`,  {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  
  console.log(content);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{ type === "movies" ? "Movies" : "Series"} </span>
          <select name="genre" id="genre"
          onChange={(e) => setGenre(e.target.value)}
          >
            <option>genre</option>
            <option value="adventure" > Adventure</option>
            <option value="comedy" > Comedy</option>
            <option value="crime" > Crime</option>
            <option value="fantasy" > Fantasy</option>
            <option value="historical" > Historical</option>
            <option value="horror" > Horror</option>
            <option value="romance" > Romance</option>
            <option value="sci-fi" > Sci-fi</option>
            <option value="thriller" > Thriller</option>
            <option value="western" > Western</option>
            <option value="animation" > Animation</option>
            <option value="drama" > Drama</option>
            <option value="documentory" > Documentory</option>
          </select>
        </div>
      )}
      <img src={content.img}
      width="100%"                                     //give width to home page image
        height="625vh"                                        //give height to home page image
      // height="600vh"
        //src=" https://img.freepik.com/premium-photo/young-woman-watching-video-demand-her-tv_738298-603.jpg?size=626&ext=jpg&ga=GA1.1.735253386.1678558567&semt=ais"
         alt="" />       {/*Home page background image*/}
    
      <div className="info">
        <img src = {content.imgTitle} alt="" />
       {/* <img src="data:image/jpeg;base64,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 " alt="" /> */}
        <span className="desc">{content.desc}</span>
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni atque tempore quis, illo corrupti qui explicabo minima corporis, ea quaerat accusantium pariatur. Molestias praesentium consequatur non voluptates natus beatae! Sit rerum officia corporis architecto optio aspernatur expedita, facilis atque? Dolores dolorem quod expedita. Voluptas quasi explicabo eos deserunt sed ut.</span> */}
       <div className="buttons">
       <Link to={{ pathname: "/watch", movie: movie }}>
       
        <button className="play">
        
          <PlayArrow/> 
           
        <span>Play</span> 
        
         
        </button>
        </Link> 
        <button className="more" >
          <InfoOutlined/> 
          <span>info </span>
        </button>
       </div>
      </div>

    </div>
    

  );
}

//export default Featured