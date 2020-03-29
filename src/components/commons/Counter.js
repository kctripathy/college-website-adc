import React from 'react';
// import NumberCounter from 'number-counter';

export default function Counter(props) {
    return (
        <>
            {props.value}
            {/* <NumberCounter end={props.value ? Number(props.value) : 0} delay={4} /> */}
        </>
    );
}
