// App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './services/countSlice';
import { selectCount } from './services/countSlice';
const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.logout);

  const count1=useSelector(selectCount);
  
  return (
    <div>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <p>Count: {count1}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <nav>
      
      </nav>
    </div>
  );
};

const About = () => (
  <div>
    <h1>About</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </div>
);

const App = () => (
  <Home/>
);

export default App;
