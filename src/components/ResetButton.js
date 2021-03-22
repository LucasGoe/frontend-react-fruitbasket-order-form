import React from 'react';

function ResetButton({title, name, reset}) {

    return (
        <button
            type="reset"
            className={name}
            onClick={reset}
        > {title}
        </button>
    );
}

export default ResetButton;