import React,{useState} from 'react'

export default function Textform(props) {
    const handelUpClick=()=>{
        console.log("Upper case clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handellowClick=()=>{
        console.log("Upper case clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");


    }
    const handleOnChange=(event)=>{
        console.log("Onchnage")
        setText(event.target.value)
    }
    const [text,setText]=useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
    
    <div className="mb-3">
        <label htmlFor="mybox" className="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',
    color:props.mode==='dark'?'white':'black'}} id="mybox" rows="3"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handelUpClick}>convert to uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handellowClick}>convert to Lowercase</button>

    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something"}</p>
    </div>
    </>
  )
}

{/*import React,{useState} from 'react'
//import "node_modules/video-react/dist/video-react.css"; // import css
///import "~video-react/styles/scss/video-react"; // or import scss
import "video-react/dist/video-react.css";
import { Player } from 'video-react';
import ReactPlayer from 'react-player'



export class Video extends PureComponent {
  render() {
    return(
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player fixed-bottom'
            url= 'C:\video-app\video-app\src\videos\video.mp4'
            width='100%'
            height='100%'
            controls = {true}

          />
        </div>
      );
  }
}

export default Video

import { Component } from 'react'
import ReactPlayer from 'react-player'
import {useState} from 'react'

class Video extends Component {
 
    render () {
        
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'videos/demo_video.MP4'
            width='100%'
            height='100%'
            controls = {true}

            />
        </div>
        )
    }
}

export default Video;
import React from 'react'
//import video from 'C:\video-app\video-app\src\videos\video.mp4'
import video from './videos/video.mp4';


function Video() {
    const [videoFilePath, setVideoFilePath] = useState(null);
    const handleVideoUpload = (event) => {
        setVideoFilePath(URL.createObjectURL(event.target.files[0]));
        }
  return (
    <div>
       
      <div className='player-wrapper'>
        <ReactPlayer
          url={video}
          controls='true'
          // ...
        />
      </div>
    <ReactPlayer
          url={video}
          // ...
        />
      <input type="file" onChange={handleVideoUpload} />
      <ReactPlayer url={videoFilePath} width="100%" height="100%" controls={true} />

    </div>
  )
}

export default Video*/}

