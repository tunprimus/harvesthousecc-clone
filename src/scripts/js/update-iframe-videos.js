// @ts-check

const CACHE_SIZE = 5;

/**
 * Function to update the videos displayed on the webpage
 * Modified from
 * @author Julia Furst Morgado
 * @address https://dev.to/juliafmorgado/automatically-embed-latest-youtube-videos-on-your-website-with-javascript-step-by-step-2i5e
 * @param {object} iframe - Node object to update the title and video source
 * @param {string} channelId - The unique id of the channel having the videos
 * @param {object} requestOptions - Options to use with fetch()
 */
const updateIframeVideos = (iframe, channelId, requestOptions) => {
  const cid = channelId;
  const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`);
  const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

  // @ts-ignore
  fetch(reqURL, requestOptions)
    .then(response => response.json())
    .then(result => {
      localStorage.setItem('rev-channel-key', JSON.stringify(result));
      const videoNumber = (iframe.getAttribute('video-number') ? Number(iframe.getAttribute('video-number')) : 0);
      const link = result.items[videoNumber].link;
      const videoTitle = result.items[videoNumber].title;
      const id = link.substr(link.indexOf('=') + 1);
      iframe.setAttribute('src', `https://youtube.com/embed/${id}?controls=0&autoplay=0`);
      iframe.setAttribute('title', `${videoTitle}`);
    })
    .catch(err => console.error('Error:', err));
};

export { updateIframeVideos };