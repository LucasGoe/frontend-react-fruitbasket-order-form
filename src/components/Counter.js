import React from 'react';

function Counter({ title, }) {

    return (
        <button type="button" onClick={() => console.log(title)}>{title}</button>
    );
};

export default Counter;