import React, { useRef } from 'react';

function Render() {
    const renders = useRef(0);

    function RenderC() {
        renders.current++;

        console.log('Render count:', renders.current);
    }
    return (
        <div>
            <h2>Renders</h2>
            <button onClick={RenderC}>Add</button>
        </div>
    );
}

export default Render;
