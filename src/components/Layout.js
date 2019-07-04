import React, { Component } from 'react';
import Cards from './Cards/Cards';

import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

//Redux
import { connect } from 'react-redux';
import { newGame } from '../redux/actions/kahootActions';
import { otherAction } from '../redux/actions/otherActions'

class Layout extends Component {
    render() {
        //style:
        const Wrapper = styled(Grid)`
           position: relative;
        `;

        const ItemsWrapper = styled.div`
            height: 500px;
            padding-top: 50px;
        `;

        const Item = styled.div`
            border: 1px solid black;
            width: 300px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 10px;
        `;

        const InfoBox = styled.div`
            border: 1px solid black;
            padding: 30px;
        `;

        if (this.props.a || this.props.b || this.props.c || this.props.d) {
            var ITEMA = null;
            var ITEMB = null;
            var ITEMC = null;
            var ITEMD = null;

            if (this.props.a) {
                ITEMA = <Item>type: A, qty: {this.props.a}, score: {this.props.a * 50}</Item>
            }
            if (this.props.b) {
                ITEMB = <Item>type: B, qty: {this.props.b}, score: {this.props.b * 30}</Item>
            }
            if (this.props.c) {
                ITEMC = <Item>type: C, qty: {this.props.c}, score: {this.props.c * 20}</Item>
            }
            if (this.props.d) {
                ITEMD = <Item>type: D, qty: {this.props.d}, score: {this.props.d * 15}</Item>
            }
        }

        const allITEMS = <div>{ITEMA}<br />{ITEMB}<br />{ITEMC}<br />{ITEMD}</div>
        return (
            <Wrapper container>
                <Grid item xs={8}>
                    <Cards />
                </Grid>
                <Grid item xs={4}>
                    <ItemsWrapper>
                        {allITEMS}
                    </ItemsWrapper>
                    <InfoBox>
                        <div>BONUS: {this.props.bonus}</div>
                        <div>Points: {this.props.allPoints}</div>
                        <button onClick={this.props.newGame}>NEW GAME</button>
                    </InfoBox>
                </Grid>
                <button onClick={() => this.props.otherAction()} >Action from another reducer {this.props.otherCounter}</button>
                <p>{this.props.otherRedMessage}</p>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        points: state.kahootReducer.points,
        a: state.kahootReducer.countA,
        b: state.kahootReducer.countB,
        c: state.kahootReducer.countC,
        d: state.kahootReducer.countD,
        bonus: state.kahootReducer.bonus,
        allPoints: state.kahootReducer.allPoints,

        otherRedMessage: state.otherExampleReducer.exampleMessage,
        otherCounter: state.otherExampleReducer.counter
    }
}

const mapDispatchToProps = {
    newGame,
    otherAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)