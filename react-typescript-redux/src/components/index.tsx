import * as React from "react";
import { Link } from "react-router";

// export interface HelloProps { compiler: string; framework: string; }

// note: React.Component<Properties/Props, redux-state>
export default class App extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                {/* <h1>Hello from {this.props.compiler}and {this.props.framework}!</h1> */}
                <h1>Hello App!</h1>

                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                </ul>


                {/* add this for show routes*/}
                {this.props.children}

            </div>
        )

    }
}