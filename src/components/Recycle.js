import Lottie from "lottie-react";
import React from "react";
import recycleanimation from "../recycle.json"
const style = {
    height: 300,
    backgroundColor:"white",
    paddingTop:20
  };
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.5],
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: "seek",
        frames: [0, 100],
      
      },
      {
        visibility: [0.45, 5.0],
        type: "loop",
        frames: [14, 120],
        
      },
    ],

  };
  const Recycle = () => {
    return (
      <Lottie
        animationData={recycleanimation}
        style={style}
        interactivity={interactivity}
      />
    );
  };
  export default Recycle;