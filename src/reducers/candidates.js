const initialState = [];

const candidates = (allCandidates = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload;
    case 'INCREMENT':
      return allCandidates.map(candidate =>
        candidate.name === action.payload
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      );
    case 'DECREMENT':
      return allCandidates.map(candidate =>
        candidate.name === action.payload
          ? { ...candidate, votes: candidate.votes - 1 }
          : candidate
      );
    case 'ADD_CANDIDATE':
      const { id, name, votes } = action.payload;
      return [...allCandidates, { id, name, votes }];
    default:
      return allCandidates;
  }
};

export default candidates;
