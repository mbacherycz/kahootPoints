import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { addPoint } from '../../../redux/actions/kahootActions';

const Card = (props) => {

    const Card = styled.div`
        width: 140px;
        height: 140px;
        border: 3px solid black;
        text-transform: uppercase;
        margin: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s;
        :hover{
            transform: scale(1.1, 1.1);
            cursor: pointer;
            border-radius: 5px;
        }
        :active{
            transform: scale(.9, .9);
        }
    `;

    return (
        <Card onClick={() => props.addPoint(props.type)}>Type: {props.type}</Card>
    )
}

const mapDispatchToProps = {
    addPoint
}

export default connect(null, mapDispatchToProps)(Card);