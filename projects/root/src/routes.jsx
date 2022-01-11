import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './components/HomePage';
import { App as DeliveryApp } from '@infinity/delivery';

const Orders = React.lazy(() => import('orders/App'));
export const Routes = ({ store }) => {
  const user = useSelector((state) => state?.user);
  return (
    <Fragment>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/orders/'>
        <Orders store={store} />
      </Route>
      {user?.isConnected && (
          <Route path='/delivery/'>
            <DeliveryApp storeName="Global Store" />
          </Route>
      )}
    </Fragment>
  );
};
