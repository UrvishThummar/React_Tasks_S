import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function Pro() {
    return (
        <div>
            <Link to='Child1'>Child</Link>
            <div>
                <Outlet></Outlet>
            </div>
        </div>


    )

}
export default Pro; 