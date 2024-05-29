import React, { useState, useEffect } from 'react';

function Qty({ max = Infinity, onChangeQty, value = 1, disabled = false }) {
    const [count, setCount] = useState(value);


    // useEffect( () => {
    //     value !== count && setCount( value );
    // }, [ value ] )

    // useEffect( () => {
    //     onChangeQty && onChangeQty( count );
    // }, [ count ] )

    // function increase () {
    //     setCount(prevCount => Math.min(max, prevCount + 1));
    // }

    // function decrease () {
    //     setCount(prevCount => Math.max(1, prevCount - 1));
    // }

    // function changeCount ( e ) {
    //     let value = e.target.value ? parseInt( e.target.value ) : 0;
    //     setCount( Math.min( value, max ) );
    // }


    useEffect(() => {
        value !== count && setCount(value);
    }, [value]);

    function increase() {
        if(disabled) return;
        const newCount = Math.min(max, count + 1);
        onChangeQty(newCount);
    }

    function decrease() {
        if(disabled) return;
        const newCount = Math.max(1, count - 1); 
        onChangeQty(newCount);
    }

    return (
        <div className="product-single-qty">
            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                <span className="input-group-btn input-group-prepend">
                    <button className="btn btn-outline btn-down-icon bootstrap-touchspin-down" onClick={decrease} type="button" disabled={count === 1}></button>
                </span>
                <input className="horizontal-quantity form-control" type="number" min="1" max={max} value={count} style={{ fontFamily: "Jakarta sans-serif;", fontWeight: "600" }} />
                <span className="input-group-btn input-group-append">
                    <button className="btn btn-outline btn-up-icon bootstrap-touchspin-up" onClick={increase} type="button" disabled={count === max}></button>
                </span>
            </div>
        </div>
    );
}

export default Qty;