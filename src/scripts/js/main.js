// @ts-check

const REV_CHANNEL_VIDEOS_URL = 'https://www.youtube.com/@NiyiEboda/videos';
const SEEK_ID = '#video-title-link';
const REV_CHANNEL_ID = 'UCWp3V0pGzOZy_an6ZsSUFiw';
const REV_CHANNEL_RSS_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCWp3V0pGzOZy_an6ZsSUFiw';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};


const updateIframeVideos = (iframe) => {
  const cid = REV_CHANNEL_ID;
  const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`);
  const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

  // @ts-ignore
  fetch(reqURL, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      const videoNumber = (iframe.getAttribute('video-number') ? Number(iframe.getAttribute('video-number')) : 0);
      const link = result.items[videoNumber].link;
      const videoTitle = result.items[videoNumber].title;
      const id = link.substr(link.indexOf('=') + 1);
      iframe.setAttribute('src', `https://youtube.com/embed/${id}?controls=0&autoplay=1`);
      iframe.setAttribute('title', `${videoTitle}`);
    })
    .catch(err => console.error('Error:', err));
};

const iFrameElements = document.getElementsByClassName('sermon-iframe');
for (let i = 0; i < iFrameElements.length; i++) {
  updateIframeVideos(iFrameElements[i]);
}
