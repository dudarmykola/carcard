import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => (
  <div className='error-wrapper'>
    <div>
      <h1 className='error-wrapper__title'>404</h1>
    </div>
    <div>
      <Link className='error-wrapper__link' to='/'>Take me back to CarCard</Link>
    </div>
  </div>
);

export default NotFound;
