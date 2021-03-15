import { useState, useEffect } from 'react';
import axios from 'axios';

import servicePath from '../../config/apiUrl';
import Nav from "./Nav";

export default function Header({ typeId }) {

  const [navArr, setNavArr] = useState([]);

  // 发送axios请求获得导航栏类别数据
  useEffect(() => {
    const getNavData = async () => {
      const ret = await axios.get(servicePath.getTypeInfo);
      setNavArr(ret.data.data);
    }
    getNavData();
  }, []);

  return (
    <header className='header'>
      <Nav typeId={typeId} navArr={navArr}></Nav>
      <div className='header-banner'>
        <div className='header-banner-info'>
          <div className='header-banner-info-title'>LF-GのBlog</div>
          <div className='header-banner-info-subtitle'>
            Don't talk it, &nbsp; just show me the code
          </div>
        </div>
      </div>
    </header>
  )
}
