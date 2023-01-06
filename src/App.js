import React, { useState, useRef } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import Entry from "./components/Entry";
import videoList from "./videoList";
import PlayerControls from "./components/PlayerControls";

function App() {
  const [state, setState] = useState({
    playing: true,
    played: 0,
  });

  const playerRef = useRef(null);

  const { playing, played } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
    console.log(playing);
  };

  const handleProgress = (changeState) => {
    // console.log(changeState);

    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (e, newValue) => {
    setState({ ...state, played: parseFloat(newValue / 100) });
  };

  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };
  const handleSeekMouseUp = (e, newValue) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(newValue / 100);
  };

  function createEntry(videoItem) {
    return (
      <Entry
        key={videoItem.id}
        link={videoItem.link}
        playing={playing}
        onProgress={handleProgress}
      />
    );
  }

  return (
    <div className="App">
      {/* <Canvas width={window.innerWidth} height={window.innerHeight / 1.5} /> */}

      <h1>Mosaic Player</h1>

      <dl className="dictionary">{videoList.map(createEntry)}</dl>
      <PlayerControls
        onPlayPause={handlePlayPause}
        playing={playing}
        played={played}
        onSeek={handleSeekChange}
        onSeekMouseDown={handleSeekMouseDown}
        onSeekMouseUp={handleSeekMouseUp}
      />
    </div>
  );
}

export default App;
