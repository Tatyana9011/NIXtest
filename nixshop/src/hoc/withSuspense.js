import React, { Suspense } from 'react';
import Louder from '../components/comon/Louder/Louder';


export const withSuspense = (Component) => {
  return (props) => {
    return <Suspense fallback={<Louder />}>
      <Component {...props} />
    </Suspense>
  }
}

