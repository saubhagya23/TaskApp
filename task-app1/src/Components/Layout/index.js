import React, { Component } from 'react';
import Header from '../../Common/Header';

class Layout extends Component {
  render() {
    // console.log('props in layoaut is-->', this.props);
    return(
      <div>   
        <Header {...this.props}/>
        { this.props.children }
      </div>
    );
  }
}

export default Layout;