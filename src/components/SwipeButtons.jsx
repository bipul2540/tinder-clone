import React from "react";
import "./../style/SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="siwpeButtons">
      <IconButton className="siwpeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="siwpeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="siwpeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="siwpeButtons__right">
        <FavouriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="siwpeButtons__lightining">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
