import React, { Suspense } from 'react';
import Preloder from '../components/comon/Preloder/Preloder';


export const withSuspense = (Component) => {
  return (props) => {
    return <Suspense fallback={<Preloder />}>
      <Component {...props} />
    </Suspense>
  }
}

