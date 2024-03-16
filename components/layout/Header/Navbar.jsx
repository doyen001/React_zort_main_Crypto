import NavItem from "./NavItem"

export default function Navbar({className}) {
    return (
        <div className={className}>
            <NavItem link='/' target='_self' label='Trading Arena'/>
            <NavItem link='/about' target='_self' label='ZVaults'/>
            <NavItem link='/faq' target='_self' label='Zort Lite'/>
            <NavItem link='/contact' target='_self' label='Company'/>
        </div>
    )
}