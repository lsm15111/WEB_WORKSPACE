import { useState } from 'react';

function MovieSearch({onSearchMovie}){

    const [movieSearch,setMovieSearch] =useState()

    return (<div>
        {/* search form*/}
        <fieldset>
          <legend>영화 정보 검색</legend>
          <label>영화검색</label>
          <input type="text" value={movieSearch} onChange={(e)=>{
            setMovieSearch(e.currentTarget.value);
          }}
          
          onKeyUp={(e)=>{
            console.log(movieSearch)
            onSearchMovie(movieSearch)
          }}
          />{" "} <span>{movieSearch}</span><br />
            
        </fieldset>
      </div>)
}
export default MovieSearch;