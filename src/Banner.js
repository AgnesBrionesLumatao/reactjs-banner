import React, { Component } from 'react';
import BannerImage from './BannerImage';
import './index.css';

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img_index: 0
	};
  }

  render() {
  	const {bannerUrls} = this.props
  	const {img_index} = this.state;
    return(
      <div className='gallery-container' onClick={this.updateImgIndex.bind(this)}>
        <BannerImage src={bannerUrls[img_index]} alt={'Image number ' + (img_index)} />
  	  </div>
    )
  }

  updateImgIndex() {
  	this.setState({
	  img_index: (this.props.bannerUrls.length - 1) > this.state.img_index ? 
	    (this.state.img_index + 1) : 0
	})
  }
}

export default Banner;
