import React, {Component} from 'react';
import {Connect} from '../utils/redux';
import {requestToken} from "../actions/auth";
import {Dimmer, Grid, Loader, Message, Segment} from "semantic-ui-react";

@Connect(
    (store) => ({
        loading: store.loading
    }),
    (dispatch) => ({
    })
)
export default class Login extends Component
{

    render = () => (
        <Grid container={false} className="middle aligned center aligned">
            <Grid.Column>
                <Segment.Group>
                    <Segment inverted color="blue">
                        <h2 className="ui black header">
                            <div className="content">
                                Reactived Boilerplate
                            </div>
                        </h2>
                    </Segment>
                    <Segment>
                        <Dimmer active={this.props.loading} inverted>
                            <Loader />
                        </Dimmer>
                    </Segment>
                </Segment.Group>
            </Grid.Column>
        </Grid>

    )

}