import * as React from "react";

import Quiz from './grid-elements-in-a-row/quiz';

import './App.scss';

export interface HelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<HelloProps, {}> {
  render() {
    return (
      <>
        {/* Hello from {this.props.compiler} and {this.props.framework}! */}
        <Quiz />
      </>
    );
  }
}