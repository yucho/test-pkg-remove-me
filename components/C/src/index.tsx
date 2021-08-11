import React from 'react';
import styles from './C.css';

interface CProps {
  /** The value for the component to display */
  value?: string;
}

/** A simple component. */
export const C = (props: CProps) => {
  return (
    <div className={styles.c}>
      This is a C component {props.value}
      More and more lines More and more lines More and more lines More and more
      lines More and more lines More and more lines More and more lines More and
      more lines More and more lines More and more lines More and more lines
      More and more lines More and more lines More and more lines More and more
      lines More and more lines More and more lines More and more lines More and
      more lines More and more lines
    </div>
  );
};

export default C;
