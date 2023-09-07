import logo from './logo.svg';
// import './App.css';
// import TODOlist from './todo list/selfTODO/selfTODO';
import Clock from 'react-clock';
import { useEffect, useState } from 'react';


 


function App() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);

      
    };
  }, []);
  console.log(value);
  return (
    <>
     <Clock value={value}/>
      
    </>
  );
}


export default App;
