import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './components/HomePage';

const Delivery = React.lazy(() => import('delivery/App'));
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
            <Delivery store={store} />
          </Route>
      )}
    </Fragment>
  );
};
