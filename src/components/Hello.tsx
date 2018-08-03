/*global undefinedVariable:false Raven:false*/
/*eslint no-unused-vars:0 no-eval:0*/

declare var require : any

import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    componentDidMount() {
        // throw "abc";
    }

    notAFunctionError() {
        var someArray = [{ func: function () { } }];
        someArray[1].func();
    }

    render() {
        return (
            <div>
                <h1 onClick={this.notAFunctionError}>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
            </div>)
    }
}
