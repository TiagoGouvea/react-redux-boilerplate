import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ACTIONS } from '../actions/actionTypes';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Todo extends Component {
    renderDone () {

    }

    renderTodo () {

    }

    render () {
        return (
            <div style={styles.view}>
                <TextField name={'input'} value={this.props.todo} onChange={(e) => this.props.inputChanged(e.target.value)} />
                <RaisedButton onPress={() => {}} />
                <div style={styles.row}>
                    <div style={styles.rowChild}>
                        <h1>Todo</h1>
                    </div>
                    <div style={styles.rowChild}>
                        <h1>Todo</h1>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todo: state.todo.todo,
    list: state.todo.list
});

const mapActionsToProps = (dispatch) => ({
    inputChanged: (item) => dispatch({type: ACTIONS.INPUT_CHANGED, payload: item})
});
export default connect(mapStateToProps, mapActionsToProps)(Todo);

const styles = {
    view: {
        padding: 20
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    rowChild: {
        flex: 1
    }
};
