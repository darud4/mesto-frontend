import Menu from "./Menu";

function Header({email}) {
    return (
        <header className="header">
            <a href="#" className="header__logo"></a>
            <Menu email={email}/>
        </header>
    );
}

export default Header;