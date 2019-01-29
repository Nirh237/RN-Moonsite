const ShowReducerDefaultState = [];

const ShowReducer = (state = ShowReducerDefaultState, action) => {
  
    switch (action.type) {

      case 'GET_SHOW': return  action.shows;
    
      default:
        return state;
    }
  };

  export default ShowReducer;