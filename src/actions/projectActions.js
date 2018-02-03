export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILED = 'FETCH_PROJECTS_FAILED';

export const fetchInitialProjects = () =>
  (dispatch) => {
    fetch('http://localhost:3030/projects')
      .then((response) => {
        return response.json()        
      })
      .then(resAsJson => {
        dispatch({type: 'FETCH_PROJECTS_SUCCESS', payload: resAsJson});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_PROJECTS_FAILED', payload: 'err'})      
      })
  }

 