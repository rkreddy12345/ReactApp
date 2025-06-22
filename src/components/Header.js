const Title = () => (
    <a href="/">
        <img alt="logo" className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbS295BL3xdJwXWwh7cTytVNtCwa-0r5TI9UviYdDmsnDk15ovoj2HcZlusgDiYkuo4o&usqp=CAU"
        />
    </a>
);

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    )
}

export default Header;