import React, {Component} from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import history from '../config/history';
import Todo from '../views/todoView';

class RouterContainer extends Component {
    render () {
        return (
            <ConnectedRouter history={history}>
                <Route component={Todo} />
            </ConnectedRouter>
        );
    }
};

const mapState = () => {
    return {};
};

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(RouterContainer);
