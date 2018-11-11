import React, { Component } from 'react';
import Camera from 'react-camera';
import '../css/camera.css';
import axios from 'axios';


export default class WebCam extends Component {


   state = {
    picture: null,
    username: ''
   }

   componentDidUpdate(prevProps, prevState) {
    if(prevState.picture !== this.state.picture) {
      console.log(this.state.picture)
    }
   }

  async takePicture() {
    let theBlob;
    this.camera.capture()
    .then(blob => {
      console.log(blob)
      theBlob = blob;
      this.img.src = URL.createObjectURL(blob);
      this.img.onload = () => { URL.revokeObjectURL(this.src); }
    })
    console.log(this.img)
    await this.setState({
      // picture: this.img.src.toString().slice(5),
      picture: theBlob
    })
}


  uploadHandler(e){
    e.stopPropagation()
    const user_id = localStorage.getItem('user_id')
    const image = document.querySelector('.captureImage')
    const blob = image.src
      axios.post('/pictures', {
        user_id: user_id,
        img_file: blob
    })
    // window.location.replace('/newsfeed')
  }


// <button onClick ={() => this.uploadHandler()}> SEND TO PSQL </button>

  render() {
    return (
      <div className ='container'>
        <Camera
          style={style.preview}
          className ='preview'
          ref={(cam) => {
            this.camera = cam;
          }}
        >
        </Camera>
        <div className='buttonsContainer'>
            <div className ='captureContainer' onClick={() => this.takePicture()}>
              <button className ='captureButton'> CAPTURE </button>
            </div>
            <div className ='uploadButton' onClick ={(e) => this.uploadHandler(e)}>
              <button className ='captureButton'> UPLOAD </button>
            </div>  
         </div> 
         <img
          className ='captureImage'
          ref={(img) => {this.img = img;}}
        />
      </div>
    );
  }
}

const style = {
  preview: {
    position: 'relative',
  }
};

