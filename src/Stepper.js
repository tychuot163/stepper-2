import React, { Component } from "react";
import styles from "./styles";
import Progress, { Stage } from "./components/Progress";
import Steps, { Step } from "./components/Steps";

const Header = ({ title }) => <div style={styles.header}>{title}</div>;
const Footer = ({ title }) => <div style={styles.footer}>{title}</div>;

class Stepper extends Component {
  state = {
    stage: this.props.stage || 1
  };
  handleClick1 = () => {
    this.setState({ stage: this.state.stage + 1 });
  };
  handleClick2 = () => {
    this.setState({ stage: this.state.stage - 1 });
  };
  static Progress = Progress;
  static Steps = Steps;
  static Stage = Stage;
  static Step = Step;
  static Header = Header;
  static Footer = Footer;
  render() {
    const { state, handleClick1, handleClick2 } = this;
    const { stage } = state;
    return (
      <div style={styles.container}>
        {this.props.children(stage, handleClick1, handleClick2)}
      </div>
    );
  }
}

export default Stepper;
