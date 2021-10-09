import React from 'react';

const Advertisements = () => {
  return (
    <React.Fragment>
      <div className='col-sm-3' style={{ height: '86vh', overflowY: 'auto' }}>
        <h2 className='my-4'>Advertisements</h2>
        <div class='max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
          <div class='px-4 py-2'>
            <h1 class='text-3xl font-bold text-gray-800 uppercase dark:text-white'>
              NIKE AIR
            </h1>
            <p class='mt-1 text-sm text-gray-600 dark:text-gray-400'>
              products you might be interested in
            </p>
            <p class='mt-1 text-sm text-gray-600 dark:text-gray-400'>
              Be confident in your style in the BE-DO-WIN.Do yourself a favour
              by stepping into a modern take on an '80s original.Win with a
              comfortable design that cushions every step.The BE-DO-WIN also
              carries an impactful message: "BE conscious of climate change, DO
              take action against climate change and WIN the battle to prevent
              climate change".
            </p>
          </div>

          <img
            class='object-cover w-full h-48 mt-2'
            src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=420&q=80'
            alt='NIKE AIR'
          />

          <div class='flex items-center justify-between px-4 py-2 bg-gray-900'>
            <h1 class='text-lg font-bold text-white'>$129</h1>
            <button class='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Advertisements;
