import React, { Fragment } from 'react';

interface Props {
    storeName: string;
}

export const App = ({ storeName: name }: Props) => (
    <Fragment>
        <h1>{name}: Delivery App</h1>
        <p>Description</p>
    </Fragment>
);
