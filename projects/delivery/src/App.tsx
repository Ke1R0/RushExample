import React, { Fragment } from 'react';

interface Props {
    storeName: string;
}

export const App = ({ storeName }: Props) => (
    <Fragment>
        <h1>{storeName}: Delivery App</h1>
    </Fragment>
);
