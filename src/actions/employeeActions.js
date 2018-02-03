export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_FAILED = 'FETCH_EMPLOYEES_SUCCESS';

export const fetchInitialEmployees = () =>
  (dispatch) => {
    fetch('http://localhost:3030/employees')
      .then((response) => {
        return response.json()        
      })
      .then(resAsJson => {
        dispatch({type: FETCH_EMPLOYEES_SUCCESS, payload: resAsJson});
      })
      .catch((err) => {
        dispatch({type: FETCH_EMPLOYEES_FAILED, payload: 'err'})      
      })
  }
