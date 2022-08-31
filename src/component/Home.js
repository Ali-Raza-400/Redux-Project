import React from 'react';

function Home(props) {
  console.warn('Props Home', props);
  return (
    <div >
      <h1>Home Component</h1>
      

      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://www.whatmobile.com.pk/admin/images/Apple/AppleiPhone13-b.jpg' />
        </div>
        <div className='text-wrapper item'>
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className='btn-wrapper item'>
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: 'i phone 11' });
            }}
          >
            Add To Cart
          </button>
          <button className='remove-cart-btn'
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
