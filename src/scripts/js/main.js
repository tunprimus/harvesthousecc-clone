// @ts-check

const REV_CHANNEL_URL = 'https://www.youtube.com/@NiyiEboda/videos';
const SEEK_ID = 'video-title-link';

/**
 * Checks if DOMParser is supported before using it to convert streams into HTML
 * @returns boolean
 */
var supportStreamParse = (function () {
  if (!window.DOMParser) {
    return false;
  }
  var parser = new DOMParser();
  try {
    parser.parseFromString('buffer', 'text/html');
  } catch(err) {
    return false;
  }

  return true;
})();

/**
 * Converts stream or template string into HTML DOM nodes
 * @param {string} stream - The stream string
 * @returns {Node} The template HTML
 */
function streamToHTML(stream) {
  /**
   * If DOMParser is supported, use it
   */
  if (supportStreamParse) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(stream, 'text/html');
    return doc.body;
  }

  /**
   * Otherwise, fallback to old-school method
   */
  var dom = document.createElement('div');
  dom.innerHTML = stream;
  return dom;
}

/**
 * 
 * @param {string} url - The URL to fetch the video from
 * @param {string} keyId - The unique id of the div containers
 * @param {number} numberOfTitles - The number of titles to retrieve
 */
function fetchYouTubeVideoTitles(url, keyId, numberOfTitles = 4) {
  fetch(url)
    .then(function(response) {
      return response.text();
    })
    .then(function(html) {
      var doc = streamToHTML(html);
      // var titleContainers = doc.querySelectorAll(keyId);
      var limitedTitleContainers = [];
      for (var i = 0; i < numberOfTitles; i++) {
        // limitedTitleContainers.push(titleContainers[i]);
      }
      console.log(limitedTitleContainers);
    })
    .catch(function(err) {
      console.error('Failed to fetch page: ', err);
    })
}

console.table(fetchYouTubeVideoTitles(REV_CHANNEL_URL, SEEK_ID, 4));
