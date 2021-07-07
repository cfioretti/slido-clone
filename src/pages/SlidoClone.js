import React, { useEffect, useState } from 'react';
import axios from '../services/Axios';
import Header from '../components/header/Header';

const SlidoClone = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/events').then(response => {
      console.log(response);
      setData(response?.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className='md:container md:mx-auto'>
        <div className={'w-full'}>
          <h1>Slido Clone</h1>
        </div>
        <div className={'w-full '}>
          {data?.map(({ uid, title, description, start_at, end_at }) => (
            <div>
              <div>Event {uid}</div>
              <div>{title}</div>
              <div>{description}</div>
              <div>
                Start at {start_at}
                <br />
                End at {end_at}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SlidoClone;
