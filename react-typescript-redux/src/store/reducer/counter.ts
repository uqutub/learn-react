import CounterAction from '../action/counter';

// import { fromJS } from 'immutable';
// const INITIAL_STATE = fromJS({
//   count: 0,
// });

const INITIAL_STATE = {
    count: 0,
};

interface IAction {
    type: string,
    payload?: any
}

function counterReducer(state = INITIAL_STATE, action: IAction) {
    switch (action.type) {
        case CounterAction.INCREMENT_COUNTER:
            console.log('reducer: increnemt')
            // return state.update('count', (value) => value + 1);
            return Object.assign({}, state, { count: state.count + 1 });
        case CounterAction.DECREMENT_COUNTER:
            console.log('reducer: decrenemt')
            // return state.update('count', (value) => value - 1);
            return Object.assign({}, state, { count: state.count - 1 });
        default:
            return state;
    }
}


export default counterReducer;