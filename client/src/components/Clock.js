import React from 'react';
import Tick from './Tick';

// function tick() {
//     const element = (
//         <div>
//       <h1>Hello, world!</h1>
//       <h2>The current time is: {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
console.log(Tick);





const Clock = () =>(
  <div>
    <h1>Hello, world!</h1>
    <h2>It is <Tick/>.</h2>
  </div>

);


export default Clock;