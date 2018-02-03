export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const FETCH_TEAMS_FAILED = 'FETCH_TEAMS_FAILED';

export const fetchInitialTeams = () =>
  (dispatch) => {
    fetch('http://localhost:3030/teams')
      .then((response) => {
        return response.json()        
      })
      .then(resAsJson => {
        dispatch({type: FETCH_TEAMS_SUCCESS, payload: resAsJson});
      })
      .catch((err) => {
        dispatch({type: FETCH_TEAMS_FAILED, payload: 'err'})      
      })
  }
