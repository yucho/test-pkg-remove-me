import React from 'react';
import styles from './B.css';

interface BProps {
  /** The value for the component to display */
  value?: string;
}

/** A simple component. */
export const B = (props: BProps) => {
  return (
    <div className={styles.b}>
      This is a B component {props.value}
      Add hella lines Add hella lines Add hella lines Add hella lines Add hella
      lines Add hella lines Add hella lines Add hella lines Add hella lines Add
      hella lines Add hella lines Add hella lines Add hella lines Add hella
      lines Add hella lines Add hella lines Add hella lines
    </div>
  );
};

export default B;
