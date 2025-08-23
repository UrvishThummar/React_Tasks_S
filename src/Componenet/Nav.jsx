import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <div style={{ gap: '5px' }}>
                <Link style={{ marginLeft: '15px' }} to='/API'>API</Link>
                <Link style={{ marginLeft: '15px' }} to='/Card12'>Card12</Link>
                <Link style={{ marginLeft: '15px' }} to='/Product'>Prodcut</Link>
                
            </div>
        </>
    )
}

export default Nav;