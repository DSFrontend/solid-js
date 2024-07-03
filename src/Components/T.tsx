import { ParentComponent } from 'solid-js';

export const T: ParentComponent = (props) => {
  console.log('T', props.children);
  return <h3>{props.children}*C</h3>;
};
