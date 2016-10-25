import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import CounterAction from '../action/counter';

class CounterEpic {

    addTodoEpic = (action$: ActionsObservable<any>) =>
        action$.ofType(CounterAction.INCREMENT_COUNTER)
            .switchMap(() => {
                return Observable.of({
                    type: CounterAction.DUMMY,
                    payload: ''
                });
            });

}

let counterEpic = new CounterEpic();
export default counterEpic;