import * as React from "react";
import { connect } from "react-redux";

interface IHomeProps extends React.Props<any> {
    counter: number;
};

function mapStateToProps(state: any) {
    console.log('state: ', state)
    return {
        counter: state.counter['count'],
    };
}


export class Home extends React.Component<IHomeProps, {}> {
    render() {
        return (<h1>Home Page! {this.props.counter} </h1>);
    }
}


export default connect(mapStateToProps)(Home);

// export interface HelloProps { compiler: string; framework: string; }
// export class Hello extends React.Component<HelloProps, {}> {
//     render() {
//         return (<h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>);
//     }
// }