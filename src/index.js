import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import './index.css';

const bannerContainer = document.querySelector('.banner');

// Create new array with URLs for images
let bannerUrls = [
  'https://www.westernunion.com/blog/wp-content/uploads/2017/05/Mendoz_wine_country-960x360.jpg',
  'https://www.westernunion.com/blog/wp-content/uploads/2017/05/vineyards_reasons_to_go_to_croatia-960x360.jpg',
  'http://www.hollandbiomass4energysolutions.eu/wp-content/uploads/2012/07/slider-960-360-2.jpg',
  'http://toroadvantage.com/wp-content/uploads/2011/05/SolidTine_Feature_960x360.jpg',
  'http://patagoniacalling.com/wp-content/uploads/iguassu-falls-panorama-dual-monitor-other-959738_960x360.jpg',
  'https://www.westernunion.com/blog/wp-content/uploads/2017/05/mountains_reasons_to_go_to_poland-960x360.jpg',
  'https://www.westernunion.com/blog/wp-content/uploads/2017/05/Mendoz_wine_country-960x360.jpg',
  'https://www.westernunion.com/blog/wp-content/uploads/2017/06/Coron_Island_where_to_go_in_philippines-960x360.jpg',
  'https://www.westernunion.com/blog/wp-content/uploads/2017/05/love_runnel_reasons_to_go_to_romania-960x360.jpg',
  'https://www.westernunion.com/blog/wp-content/uploads/2016/10/GettyImages-498087047-960x360.jpg',
  'http://bento.cdn.pbs.org/hostedbento-prod/filer_public/PBS%20Program%20Features/Pledge%20Features/March2017/NATURE_SuperHummingbirds2_960x360.jpg',
  'https://www.westernunion.com/blog/wp-content/uploads/2017/05/Tuscany_wine_region-960x360.jpg'
];

ReactDOM.render(
  <Banner bannerUrls={bannerUrls} />,
  bannerContainer
);
