import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
  enter: 400, // on entering
  exit: 1000 // on exiting
};

const transitionMethods = {
  onEnter: () => {
    // console.log('on animation Enter');
  },
  onEntering: () => {
    // console.log('on animation Entering');
  },
  onEntered: () => {
    // console.log('on animation Entered');
  },
  onExit: () => {
    // console.log('on animation Exit');
  },
  onExiting: () => {
    // console.log('on animation Exiting');
  },
  onExited: () => {
    // console.log('on animation Exited');
  }
};

const modal = ({ closed, show }) => {
  return (
    <CSSTransition
      in={show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClose'
      }}
      // classNames="fade-slide"
      onEnter={transitionMethods.onEnter}
      onEntering={transitionMethods.onEntering}
      onEntered={transitionMethods.onEntered}
      onExit={transitionMethods.onExit}
      onExiting={transitionMethods.onExiting}
      onExited={transitionMethods.onExited}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
