import React, {Component} from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import history from '../config/history';

class RouterContainer extends Component {
    render () {
        return (
            <ConnectedRouter history={history}>
                <Route component={Koe} />
            </ConnectedRouter>
        );
    }
};

const Koe = () => (
    <div><span>koeeeeee</span></div>
);

const mapState = () => {
    return {};
};

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(RouterContainer);
