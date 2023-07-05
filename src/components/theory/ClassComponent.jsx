import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Class Component - ciclos de vida

  //OnMount
  componentDidMount() {}

  //OnUpdate
  componentDidUpdate() {}

  //Unmount
  componentWillUnmount() {}

  render() {
    return <>This is a ClassComponent
    <button>
    </>;
  }
}

export default ClassComponent;
