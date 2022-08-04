

function App() {
  return (<>
    <div>
      <h1>영화 평점 정보 관리</h1>
    </div>
    <div>
      {/* input form*/}
      <fieldset >
        <legend>영화 정보 입력</legend>
        <label>영화제목</label>
        <input type="text" value={movieTitle} onChange={(e)=>{
          setMovieTitle(e.target.value);
        }}></input>
      </fieldset>
      
    </div>
    <div>
      {/* search form*/}
      <fieldset>
        <legend>영화 정보 검색</legend>
      </fieldset>
    </div>
    <div>
      {/* list form*/}
      <fieldset>
        <legend>영화 정보 목록</legend>
      </fieldset>
    </div>
  </>);
}

export default App;
