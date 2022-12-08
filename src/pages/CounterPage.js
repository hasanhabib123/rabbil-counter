import { Container } from '@mui/material';
import React from 'react';
import Counter from '../components/counter/Counter';

function CounterPage() {
  return (
    <>
    <Container mt={5} >
      <Counter />
    </Container>
    </>
  )
}

export default CounterPage;