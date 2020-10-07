import React, { Component } from 'react';

class VideoComponent extends Component {
  render(){
    const {
      videoURL,
      videoWidth,
      videoHeight,
    } = this.props;
    return(
      <div data-testid="video-comp-main-div">
        <video 
          width={(videoWidth !== null) ? videoWidth : '100%'} 
          height={(videoHeight !== null) ? videoHeight : '100%'} 
          autoPlay 
          muted
          data-testid="video-comp"
        >
          <source src={(videoURL !== '') ? videoURL : ''} type="video/mp4" data-testid="video-comp-source" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default VideoComponent;