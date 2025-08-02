import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <div style={{ marginLeft: '5px' }}>
                <Link to='/API'>API</Link>
                <Link to='/Card12'>Card12</Link>
                <Link to='/Pro'>Pro</Link>
                
            </div>
        </>
    )
}

export default Nav;