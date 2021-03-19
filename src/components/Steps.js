import React, { Component } from "react";
import { Power2, TweenLite } from "gsap";
import {
  TransitionGroup,
  CSSTransition,
  Transition
} from "react-transition-group";
import styles from "../styles";
import Button from "./Button";
import { StepperContext } from "../App.js";

export const Step = ({ stage, num, text }) =>
  stage === num ? (
    <div key={num} style={styles.stageContent}>
      {text}
    </div>
  ) : null;

class Steps extends Component {
  render() {
    const { stage, handleClick1, handleClick2 } = this.props;
    const count = React.Children.count(this.props.children);
    return (
      <div style={styles.stagesContainer}>
        <div style={styles.stages}>{this.props.children}</div>
        <div style={styles.stageButton}>
          <Button disabled={stage === count} click={handleClick1}>
            Continue
          </Button>
          <Button disabled={stage === 1} click={handleClick2}>
            Previous
          </Button>
        </div>
      </div>
    );
  }
}

export default Steps;
