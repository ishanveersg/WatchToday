import React, {useEffect, useState} from "react";

import axios from "axios";

const MovieDetails = (props) => {

    const [movieDetails, setMovieDetails] = useState([]);

    var tempID = 557;

    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${tempID}?api_key=2005cf20cc76ab57182960fb7c3b54c1`
          )
          .then((res) => setMovieDetails(res.data));
      }, []);

      console.log(movieDetails);

    return (
        <div className="moviedetails">
            <img id="poster" src={"https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg"} alt="poster"/>
            <h1>Spider-Man (2002)</h1>
            <h2>Overview</h2>
            <p>After being bitten by a genetically altered spider at Oscorp, <br/>
              nerdy but endearing high school student Peter Parker is endowed <br/>
              with amazing powers to become the superhero known as Spider-Man.</p>

            <h2>Discussions</h2>
            <img id="comments-section" src="/img/comments.png" alt="comment-section"/>
        </div>
    );
};

export default MovieDetails;
