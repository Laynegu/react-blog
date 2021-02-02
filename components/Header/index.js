import { useState, useEffect } from 'react';
import axios from 'axios';

import servicePath from '../../config/apiUrl';
import Banner from "./Banner";
import Nav from "./Nav";

export default function Header({ typeId }) {

  const [navArr, setNacArr] = useState([]);

  useEffect(() => {
    const getNavData = async () => {
      const ret = await axios.get(servicePath.getTypeInfo);
      setNacArr(ret.data.data);
    }
    getNavData();
  }, []);

  return (
    <header className='header'>
      <Nav typeId={typeId} navArr={navArr}></Nav>
      <Banner></Banner>
    </header>
  )
}
