// @ts-check

import {updateIframeVideos} from './update-iframe-videos.js';

const REV_CHANNEL_VIDEOS_URL = 'https://www.youtube.com/@NiyiEboda/videos';
const SEEK_ID = '#video-title-link';
const REV_CHANNEL_ID = 'UCWp3V0pGzOZy_an6ZsSUFiw';
const REV_CHANNEL_RSS_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCWp3V0pGzOZy_an6ZsSUFiw';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const sermonIframeElements = document.getElementsByClassName('sermon-iframe');
for (let i = 0; i < sermonIframeElements.length; i++) {
  updateIframeVideos(sermonIframeElements[i], REV_CHANNEL_ID, requestOptions);
}
