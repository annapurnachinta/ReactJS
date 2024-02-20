import "./style.css";
import MoviePlaylist from "./components/MoviePlaylists";
import SongPlaylist from "./components/SongPlaylists";
import { useDispatch } from "react-redux";
import { reset } from "./store";

export default function App() {
  const dispatch = useDispatch()

  const handleResetClick = () => {
    // reset both Movie and Song
    dispatch(reset())
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
