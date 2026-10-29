import '../index.css';

const links = [
    { label: 'About', href: '#about' },
    { label: 'Disputes', href: '#disputes' },
    { label: 'International', href: '#international' },
    { label: 'Rates & Fees', href: '#rates-fees' },
    { label: 'Contact', href: '#contact' }
]
function NavBar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>Logo</h1>
            </div>

            <div className="nav-links">
                {
                    links.map((link) => (
                        <a key={link.label} href={link.href} className="nav-link">
                            {link.label}
                        </a>
                    ))
                }
            </div>


            <button className="btn-dark">Consultation</button>

        </div >

    )
}

export default NavBar;