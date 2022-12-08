import { Button, Card } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/state/counter/counterSlice'

function Counter() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch= useDispatch();
  return (
    <>
    <Container>
        <Card>
            <h3>My Counter App</h3>
            <h1>{count}</h1>
            <Button onClick={()=>{dispatch(increment())}} variant="contained" color="success">Increase</Button>
            <Button onClick={()=>{dispatch(decrement())}} variant="contained" color="error">Decrease</Button>
        </Card>
    </Container>
    </>
  )
}

export default Counter