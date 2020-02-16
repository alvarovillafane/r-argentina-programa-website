export const FETCH_INIT  = 'FETCH_INIT';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export default (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        loading: true,
        error: false
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        clases: action.payload,
        loading: false,
        error: false
      }
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      throw new Error();
  }
}
