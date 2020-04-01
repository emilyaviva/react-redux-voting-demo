// These functions are called 'action creators' since they just create an object that represents an action
export function increment(name) {
  return {
    type: 'INCREMENT',
    payload: name
  };
}

export function decrement(name) {
  return {
    type: 'DECREMENT',
    payload: name
  };
}

export function reset() {
  return {
    type: 'RESET'
  };
}

function addCandidateAction(data) {
  return {
    type: 'ADD_CANDIDATE',
    payload: data
  };
}

function getCandidatesAction(data) {
  return {
    type: 'GET_DATA',
    payload: data
  };
}

export function getCandidates() {
  return async dispatch => {
    const raw = await fetch('http://localhost:3001/candidates');
    const data = await raw.json();
    return dispatch(getCandidatesAction(data));
  };
}

export function addCandidate(name) {
  return async dispatch => {
    const raw = await fetch('http://localhost:3001/candidates', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, votes: 0 })
    });
    const response = await raw.json();
    return dispatch(addCandidateAction(response));
  };
}
