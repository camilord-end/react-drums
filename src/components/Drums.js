import React,{useState} from "react";
import "../styles/Drums.css";
import bankData from "./dataBank";
import Pad from "./Pad";

export default function Drums() {
  const [volume, setVolume] = useState(1)
  const [text, setText] = useState('Play time')

  return (
    <div className="wrap" id="display">
      <h4 className="legend">Drum machine</h4>
      <div className="pad-wrap">
        {bankData.map((clip) => {
          return <Pad key={clip.id} clip={clip} volume={volume} setText={setText}/>;
        })}
      </div>
      <div className="info">
        <h6>{text}</h6>
      </div>
      <br/>
      <div className="volume-wrap">
        <h5 className="volume-control">Volume </h5>
        <input className="w-30" type="range" step="0.01" value={volume} max="1" min="0" onChange={(e)=>setVolume(e.target.value)}/>
      </div>
    </div>
  );
}
