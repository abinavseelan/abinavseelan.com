import Link from 'gatsby-link'

const NavItem = ({ info }) => (
    <Link
        to={info.path}
        className="nav-item"
    >
        {info.label}
    </Link>
)