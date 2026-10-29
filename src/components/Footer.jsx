
const links = [
    { label: 'About', href: '#about' },
    { label: 'Disputes', href: '#disputes' },
    { label: 'International', href: '#international' },
    { label: 'Rates & Fees', href: '#rates-fees' },
    { label: 'Contact', href: '#contact' }
]
function Footer() {
    return (
        <div className="footer">
            <h2>THOMAS NORTHMAN</h2>
            <p>Tax Lawyer</p>

            <div className="footer-links">
                {
                    links.map((link) => (
                        <a key={link.label} href={link.href} className="footer-link">
                            {link.label}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer;