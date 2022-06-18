import React from 'react';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';

const duration = 200;

const transitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  },
};

  
const Transition = ( {children} ) => {
    return(
    <TransitionGroup>
        <CSSTransition
          timeout={duration}
        >
          {
          state => (
            <div style={{
                ...transitionStyles[state]
            }}>
              {children}
            </div>
          )}
        </CSSTransition>
      </TransitionGroup>
    );
}

export default Transition;
