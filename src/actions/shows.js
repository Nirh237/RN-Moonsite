import ShowService from '../services/showService';

export const error = (msg) => ({
    type: 'ERROR',
    msg
  });

 
  export const getAllShows = () => {

    return (dispatch) => {
  
      return ShowService.get().then(res => {
     
        if (res != null) {
          dispatch(getShow(res));
        }
        else {
          dispatch(error('Error'));
        }
      }).catch((error) => {
  
      })
    };
  };
  

  export const getShow = (shows) => ({
    type: 'GET_SHOW',
    shows
  });




