function MovieList({movieList,setMovieList}){
    
    return (<div>
        {/* list form*/}
        <fieldset>
          <legend>영화 정보 목록</legend>
          <table className="table">
            <thead>
              <tr>
                <th>순서</th>
                <th>제목</th>
                <th>개봉날짜</th>
                <th>평점</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {movieList.map((movie,i)=>{
                return(<tr key={i}>
                <td>{movie.no}</td>
                <td>{movie.movietitle}</td>
                <td>{movie.openDate}</td>
                <td>{movie.rating}</td>
                <td></td>
              </tr>)
              })}
            </tbody>
          </table>
        </fieldset>
      </div>)
}
export default MovieList;