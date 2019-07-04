import React from 'react';
import Card from './Card/Card';

const Cards = () => {

    const style = {
        display: 'flex'
    }

    return (
        <div style={style}>
            <Card type={'A'} />
            <Card type={'B'} />
            <Card type={'C'} />
            <Card type={'D'} />
        </div>
    )
}

export default Cards;