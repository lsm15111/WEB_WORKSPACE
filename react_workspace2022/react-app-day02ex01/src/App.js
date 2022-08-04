import { useState } from 'react';
import './App.css';
import MovieInput from './MovieInput'
import MovieSearch from './MovieSearch'
import MovieList from './MovieList'



function App() {
  const today = new Date().toISOString().substring(0,10);
  const [movieList,setMovieList] =useState([
    {no:1,movietitle:"토르", openDate:"2022-06-28",rating:4},
    {no:2,movietitle:"마녀2", openDate:"2022-07-10",rating:5},
    {no:3,movietitle:"탑건", openDate:"2022-07-15",rating:5}
  ]);
  const [searchList,setSearchList] = useState(movieList)
  function saveMovieFn(movietitle,openDate){
    let mno = movieList.length + 1;
    let newData = {no:mno,movietitle:movietitle, openDate:openDate,rating:5}
    let newList = [...movieList, newData]; // (...) = 기존의 리스트를 복제해옴
    setMovieList(newList);
  }

  function searchMovieFn(keyword){
    let newList = movieList.filter(function(movie){
      return movie.movieTitle.indexOf(keyword) !== 1;
    });
    setSearchList(newList);
  }

  return (<>
    <div>
      <h1>영화 평점 정보 관리</h1>
      <h3>오늘날짜: {today}</h3>
    </div>
    <MovieInput onSaveMovie={saveMovieFn}/>
    <MovieSearch onSearchMovie={searchMovieFn}/>
    <MovieList movieList={movieList} setMovieList={setMovieList}/>
    
  </>);
}

export default App;
