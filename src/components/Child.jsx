import { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';

const Child = () => {
  const contextValue = useContext(MyContext);
  return <div>Child of mine: {contextValue}</div>;
};

export default Child;
