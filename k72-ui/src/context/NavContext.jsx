import React, { createContext, useState } from 'react'

const NavContext = ({ children }) => {
    const NavbarContext = createContext()
    const [navOpen, setnavOpen] = useState(false)
    return (

        <div>
            <NavbarContext.Provider value={[navOpen, setnavOpen]}>
                {children}
            </NavbarContext.Provider>
        </div>
    )
}

export default NavContext
