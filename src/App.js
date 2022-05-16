import {useEffect,useState} from "react"
import Topbar from './Components/Topbar'
import NotesCard from'./Components/Card/NotesCard'
import { LineAxisOutlined } from '@mui/icons-material';
import axios from "axios"
import Grid from '@mui/material/Grid';
import './App.css'
import Movies from "./Components/MoviesList";
function App() {
  const [movieData, setMovieData] = useState(Movies)
  const [movieData1, setMovieData1] = useState([{}])
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    getData();
  }, []);
  
  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:4000/movies/movieslist", {});
      console.log(result.data?.data)
      setMovieData(result.data?.data||Movies)
      setMovieData1(result.data?.data)
    }
    catch (err)
    {
      console.log(err)
  }
  }
  const SearchOnChangeHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    let inputValues = searchTerm;
    inputValues = value;
    setSearchTerm(inputValues);
    if (value) {
        const Projects =movieData.filter(
            (item) =>
            (item.name != null &&
                item.name.toLowerCase().includes(value.toLowerCase())) ||
            (item.description != null &&
                item.description.toLowerCase().includes(value.toLowerCase()))
        );
        const SearchedMovie = Projects ? Projects : "No Data Found";
        console.log(SearchedMovie);
        setMovieData(Projects);
    } else  {
      setMovieData(movieData1)||setMovieData(Movies);
    }
};
  return (
    <div className="App">
      <Topbar />
      <h1 className="header-title">Top 100 Movies</h1>
      <div className='col col-lg-2 col-md-3 col-sm-4 searchbox' >
                <input className = 'form-control searchbox'
                value = { searchTerm.searchItem }
                onChange = {(e) => SearchOnChangeHandler(e) }
          placeholder='Type to search...'
          align="right">
     
             </input>
            </div>
      <div className="card_head" style={{margin:"15px"}}>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 3, sm: 8, md: 12 }}>
        {movieData != null && movieData ? movieData.map((data, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <NotesCard id={data.fileId}
              name={data.name}
              desc={data.description}
              img={data.img}
              rating={data.rating}
              link={data.link} />
          </Grid>
        )):""}
      </Grid>
      </div>
    </div>
  );
}

export default App;
