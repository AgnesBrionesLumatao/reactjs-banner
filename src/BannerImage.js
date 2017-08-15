import React, { Component } from 'react';
import './index.css';

class BannerImage extends Component {
  render() {
    return(
      <img src={this.props.src} alt={this.props.alt} />
    )
  }
}

export default BannerImage;
