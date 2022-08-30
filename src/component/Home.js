import React from 'react';

function Home() {
  return (
    <div className='Containerx'>
      <div className='add-to-cart'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg' />
      </div>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg' />
        </div>
      </div>
      <div className='text-wrapper item'>
        <span>I-Phone</span>
        <span>Price:$1000.00</span>
      </div>
      <div className='btn-wrapper item'>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default Home;
