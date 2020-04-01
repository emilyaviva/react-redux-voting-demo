import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapDispatchToProps = {
  addCandidate: actions.addCandidate
};

const AddCandidate = ({ addCandidate }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    addCandidate(data.name);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Control
        type="text"
        placeholder="New Candidate"
        name="name"
        ref={register}
      />
      <Button type="submit">Add New Candidate</Button>
    </Form>
  );
};

// This ensures that our component will have a props.addCandidate with value addCandidate (the function we imported)
export default connect(null, mapDispatchToProps)(AddCandidate);
