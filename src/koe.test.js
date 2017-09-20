import reducers from '../../reducers';

test('reducers', () => {
    let state;
    state = reducers({todo: {todo: 'gchghgvhgvhgvhgvhgvghv', list: ''}}, {type: 'INPUT_CHANGED', payload: 'koe'});
    expect(state).toEqual({todo: {todo: 'koe', list: ''}});
});
