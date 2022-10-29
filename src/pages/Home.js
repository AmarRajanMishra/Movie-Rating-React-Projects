import React from 'react'
import Movies from '../components/Movies';
import Searches from '../components/Searches';
// import { AppContext } from '../components/context';
// import { useGlobalContext } from '../components/context';


function Home() {
  // const name = useContext(AppContext);
  // const name = useGlobalContext();
  return (
    <>
     
      <Searches />
      <Movies />
    </>
  )
}

export default Home;
