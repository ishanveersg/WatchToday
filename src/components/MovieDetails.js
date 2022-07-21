import React from "react";


const MovieDetails = () => {

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
