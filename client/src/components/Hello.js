import React from 'react';


const element1 = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );
  
const element2 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
    );

const Hello = () => (
    <div>
        {element1}
        {element2}
    </div>
)

export default Hello;