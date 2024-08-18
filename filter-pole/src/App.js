import AllMovies from './data'
import {useState, useEffect} from 'react'

const App = () => {

  const [searchText, setSearchText] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([])

 useEffect( () =>{
   let MoviesAfterFilter = AllMovies.filter((myMovie)=>{
      return myMovie.title.toLowerCase().includes(searchText.toLowerCase())
    })

    setFilteredMovies(MoviesAfterFilter)
 },[searchText])

  return<div className="movies-box">
    <form>
      <input type="text" placeholder='Hledaný film' onChange={(e)=>setSearchText(e.target.value)}/>
    </form>

    <div className="all-movies">
      {filteredMovies.map((oneMovie)=>{
        const {id, image, title, age, tags, description} = oneMovie

        return <div key={id} className="one-movie">
          <img src={image} alt="" />
          <h2>{title}</h2>
          <p>{age}</p>
          <p>{tags}</p>
          <p>{description}</p>
        </div>
      })}
    </div>

    </div>
}

export default App
