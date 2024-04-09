
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="header">
                {/* <h1 className="header__logo">
          <Link to="/">Logo</Link>
        </h1> */}
                <div className="container">
                    <ul className="header__menu">
                        <li className="header__booking">
                            <FaMagnifyingGlass />
                            <NavLink to="/"
                                style={() => {
                                    return {
                                        paddingLeft: 10,
                                        fontWeight: 800,
                                        color: "#998465",
                                    };
                                }}
                            >BOOK</NavLink>
                        </li>
                        <li>
                            <NavLink to="/restaurant">DINING</NavLink>
                        </li>
                        <li>
                            <NavLink to="/hotel-offers">ƯU ĐÃI</NavLink>
                        </li>
                        <li>
                            <NavLink to="/wedding-conference">LỄ CƯỚI & HỘI NGHỊ</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="header__rewards">
                    Hotel rewards
                </div>
            </header>
        </>
    )
}

export default Header;