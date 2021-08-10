import React from 'react';
import styles from './B.css';

interface BProps {
  /** The value for the component to display */
  value?: string;
}

/** A simple component. */
export const B = (props: BProps) => {
  return (
    <>
      <div className={styles.b}>This is a B component {props.value}</div>
      <div>Add one line here.</div>
    </>
  );
};

export default B;
