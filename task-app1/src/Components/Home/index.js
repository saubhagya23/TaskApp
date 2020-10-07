import React from 'react';
import Layout from '../Layout';
import VideoComponent from '../../Common/VideoComponent';
import './style.css';

class Home extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <VideoComponent 
          videoURL={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'}
          videoWidth={'100%'}
          videoHeight={'100%'}
        />
        <div className='overlayDiv'>
          <span>Gotta Catch 'em All!!!</span>
        </div>
      </Layout>
    );
  }
}

export default Home;