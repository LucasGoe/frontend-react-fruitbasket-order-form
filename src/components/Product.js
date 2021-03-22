import React from 'react';

function Product({title, counter, setcounter, buttonminus, buttonplus, onclickminus, onclickplus}) {

    return (
        <article>
            <h2>{title}</h2>
            <button
                type="button"
                className={buttonminus}
                onClick={() => (counter > 0 ? setcounter(counter - 1) : setcounter(0))}
            >-
            </button>
            <p>{counter}</p>
            <button
                type="button"
                className={buttonplus}
                onClick={() => setcounter(counter + 1)}
            >+
            </button>
        </article>
    );
}

export default Product;