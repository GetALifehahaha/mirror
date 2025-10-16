import React, {useState, useEffect} from 'react'
import {Navbar} from '../components'
import {Outlet} from 'react-router-dom'

const Layout = () => {

    const [rerender, setRerender] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        setCartCount(() => {
        let count = JSON.parse(localStorage.getItem("cartData"));

        if (!count) {
            return 0;
        }

        return count.length;
        });
    }, [rerender]);

    const handleSetCartCount = () => {
        setRerender(rerender + 1);
    }

    return (
        <div>
            <Navbar cartCount={cartCount}/>
            <main>
                <Outlet context={{onCartChange: handleSetCartCount}}/>
            </main>
        </div>
    )
}

export default Layout