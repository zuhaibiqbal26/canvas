import React from "react";
import Container from "@mui/material/Container";
import ReactPlayer from "react-player";
import { makeStyles, styled } from "@mui/styles";

const useStyles = makeStyles({
  playerWrapper: {
    width: "480px",
    height: "270px",
    position: "relative",
  },
});

const Entry = (props) => {
  const classes = useStyles();
console.log(props)
  

  return (
    <div className="term">
      
        <div
          className={classes.playerWrapper}
        >
          <ReactPlayer
            // ref={playerRef}
            width="100%"
            height="100%"
            url={props.link}
            controls={false}
            playing={props.playing}
            onProgress={props.onProgress}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
            }}
          />
        </div>
    </div>
  );
};

export default Entry;
