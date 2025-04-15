import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies")
      .then(res => setMovies(res.data));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {movies.map(movie => (
        <div key={movie._id}>
          <h2>{movie.title}</h2>
          <p>{movie.genre} - {movie.duration} mins</p>
        </div>
      ))}
    </div>
  );
}

export default App;
