import React from 'react'
import { useGlobalContext } from './Context';

const Search = () => {
  const { enterMovieName, setEnterMovieName, isError } = useGlobalContext();
  return (
      <div className="search-box">
          <h2>Search Movie</h2>
          <form action='#' onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Search hear" value={enterMovieName} onChange={(e)=>setEnterMovieName(e.target.value)}/>
          </form>
          <div className="error">
              <p>{isError.show && isError.msg}</p>
              {/* If isError is true then isError.msg will be printed */}
          </div>
      </div> 
  )  
}

export default Search;