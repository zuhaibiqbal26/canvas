import React from "react";
import Grid from "@mui/material/Grid";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { makeStyles, styled } from "@mui/styles";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";


const useStyles = makeStyles({
    bottomIcons: {
        color: "#999!important",
        "&:hover": {
          color: "#000!important",
        },
      },
})


function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PrettoSlider = styled(Slider)({
  color: "#c22e2e!important",
  height: 3,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    // backgroundColor: '#000',
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#c22e2e",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const PlayerControls = (props) => {

    const classes = useStyles();

  return (
    <div className="controls">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        style={{ padding: 16 }}
      >
        <Grid item xs={12}>
          <PrettoSlider
            min={0}
            max={100}
            value={props.played * 100}
            valueLabelDisplay="auto"
            slots={{
              valueLabel: (props) => (
                <ValueLabelComponent {...props} value={elapsedTime} />
              ),
            }}
            onChange={onSeek}
            onMouseDown={onSeekMouseDown}
            onChangeCommitted={onSeekMouseUp}
          />
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <IconButton onClick={props.onPlayPause} className={classes.bottomIcons}>
              <PlayArrowIcon fontSize="large" />
              
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlayerControls;
