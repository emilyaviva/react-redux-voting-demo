import React, { useEffect, useCallback } from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = state => {
  return {
    candidates: state.candidates,
    totalVotes: state.totalVotes
  };
};

// const mapDispatchToProps = dispatch => ({
//   get: () => dispatch(actions.getCandidates()),
//   increment: name => dispatch(actions.increment(name)),
//   decrement: name => dispatch(actions.decrement(name)),
//   reset: () => dispatch(actions.reset())
// });

const mapDispatchToProps = {
  get: actions.getCandidates,
  increment: actions.increment,
  decrement: actions.decrement,
  reset: actions.reset
};

const Voter = ({ get, candidates, totalVotes, increment, decrement }) => {
  const fetchData = useCallback(
    e => {
      e && e.preventDefault();
      get();
    },
    [get]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section className="Voter">
      <Table size="sm" striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Votes</th>
            <th>Vote For</th>
            <th>Vote Against</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.votes}</td>
              <td>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    increment(person.name);
                  }}
                >
                  <span role="img" aria-label="Vote For">
                    👍
                  </span>
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    decrement(person.name);
                  }}
                >
                  <span role="img" aria-label="Vote Against">
                    👎
                  </span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>Total Votes: {totalVotes}</div>
      <Button variant="primary" onClick={get}>
        Reset
      </Button>
    </section>
  );
};

// Insted of exporting the component, we export it after it's been connected to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Voter);
