import * as React from "react";
import { connect } from "react-redux";

import CounterAction from "../../store/action/counter";

interface ICounterProps extends React.Props<any> {
    counter: number;
    increaseCounter: () => void;
    decreaseCounter: () => void;
};

function mapStateToProps(state: any) {
    console.log('state: ', state)
    return {
        counter: state.counter['count'],
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        increaseCounter: (): void => dispatch(CounterAction.increment()),
        decreaseCounter: (): void => dispatch(CounterAction.decrement()),
    };
}


class CounterPage extends React.Component<ICounterProps, {}> {

    render() {
        return (
            <div>
                <h1>Counter Page!</h1>
                counter: {this.props.counter}

                <button onClick={this.props.increaseCounter}>Increment</button>
                <button onClick={this.props.decreaseCounter}>Decrement</button>
            </div>
        );
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);