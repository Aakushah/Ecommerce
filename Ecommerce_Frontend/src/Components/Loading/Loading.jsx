import React from 'react'
import './loading.css';
import { Hourglass } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='wrapper'>
       
          <div className='container'>
            <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
          />
          </div>

       
    </div>
  )
}

export default Loading