import { createAction, Action } from 'redux-actions';

export default class CounterActions {

    static INCREMENT_COUNTER = 'INCREMENT_COUNTER';
    static DECREMENT_COUNTER = 'DECREMENT_COUNTER';
    static DUMMY = 'DUMMY';

    static increment() {
        console.log('action increment')
        return {
            type: CounterActions.INCREMENT_COUNTER,
        };
    }

    static decrement() {
        console.log('action decrement')
        return {
            type: CounterActions.DECREMENT_COUNTER,
        };
    }


    static addTodo = createAction<any>(
        CounterActions.DUMMY,
        payload => payload
    );

}
