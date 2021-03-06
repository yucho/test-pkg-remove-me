import React from 'react';
import styles from './A.css';

interface AProps {
  /** The value for the component to display */
  value?: string;
}

/** A simple component. */
export const A = (props: AProps) => {
  return (
    <div className={styles.a}>
      This is a A component {props.value}
      Add lots of lines Add lots of lines Add lots of lines Add lots of lines
      Add lots of lines Add lots of lines Add lots of lines Add lots of lines
      Add lots of lines Add lots of lines Add lots of lines Add lots of lines
      Add lots of lines Add lots of lines Add lots of lines Add lots of lines
    </div>
  );
};

export default A;
