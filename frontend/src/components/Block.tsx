import React from 'react';

interface blockProps {
    row: number;
    column: number
    name: string
}

function Block(props: blockProps) {
    return <h1>Hello, {props.name}</h1>;
}

export default Block;