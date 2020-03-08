import { useReducer, useEffect } from 'react';
import clasesFetchReducer, {FETCH_INIT, FETCH_ERROR, FETCH_SUCCESS} from '../reducers/clasesFetchReducer';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
      
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/';

const reactClasesPlaylistId = 'PLs73pLtDNXD_l2bEVFi1Yqph1f6pDvCnW';
const javascriptClasesPlaylistId = 'PLs73pLtDNXD893LSF8fP-EfZbGWMECmnc';

export function useFetchPlaylist (react = false) {
  const playlistId = react ? reactClasesPlaylistId : javascriptClasesPlaylistId;
  const [state, dispatch] = useReducer(clasesFetchReducer, {
    loading: true,
    error: false,
    clases: null
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCH_INIT });

      try {
        const response = await fetch(javascriptPlaylistUrl(playlistId));
        const responseJson = await response.json();

        dispatch({
          type: FETCH_SUCCESS,
          payload: generateClases(responseJson)
        });
      } catch (error) {
        dispatch({ type: FETCH_ERROR })
      }
    };

    fetchData();
  }, [playlistId]);

  return state;
}

function generateClases ({items}) {
  return items.map(({id, snippet}) => {
    return {
      id: id,
      title: snippet.title,
      videoId: snippet.resourceId.videoId,
      thumbnail: snippet.thumbnails.high.url
    }
  })
}

function javascriptPlaylistUrl(playlistId) {
  const data = {
    part: 'snippet',
    maxResults: 25
  }

  return `${YOUTUBE_URL}playlistItems?${params(data)}&playlistId=${playlistId}&key=${KEY}`
}

const params = (data) => {
  return Object.keys(data)
          .map(key => `${key}=${encodeURIComponent(data[key])}`)
          .join('&');
}
