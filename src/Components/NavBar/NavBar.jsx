import { useEffect, useState } from "react";
import LinkNavBar from "./LinkNavBar";
import Dropdown from "./Dropdown";
import {
  Logo,
  NavBarContainer,
  ButtonDropdown,
  LinkContainerDesktop,
} from "./NavBar.style";
import { List, X } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";
// import Profile from "../Profile/Profile";

export const routes = [
  { title: "Home", href: "home" },
  { title: "Events", href: "events" },
  { title: "Contacts", href: "contacts" },
  // { title: "Login", href: "Login" },
];

function NavBar() {
  const size = useWindowSize();
  const [showHamburger, setShowHamburger] = useState(false);
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const navigate = useNavigate();
  const [scrolly, setScrolly] = useState(window.scrollY);
  const [user, setUser] = useState();
  const x = localStorage.getItem("id");

  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  useEffect(() => {
    window.onscroll = (e) => {
      setScrolly(window.scrollY);
    };
    setUser(x);
  }, [x]);

  useEffect(() => {
    if (size.width <= 820) setShowHamburger(true);
    else setShowHamburger(false);
  }, [size.width]);

  const handleClick = (titlu) => {
    console.log("Esti pe titlul ", titlu);
  };

  // const handleLogout = (user) => {
  // localStorage.removeItem('user');
  // setId(null);};
  const handleLogout = () => {
    setUser("");
    localStorage.clear();
    navigate("/home"); 
  };
  console.log(user);
  const HamburgerMenu = () => {
    return (
      <>
        <ButtonDropdown onClick={() => handleDisplayDropdown()}>
          {!displayDropdown ? <List size={40} /> : <X size={40} />}
        </ButtonDropdown>
        {displayDropdown && (
          <Dropdown functieDeApelatinDropdown={handleClick} />
        )}
      </>
    );
  };

  return (
    <NavBarContainer
      style={{
        backgroundColor: scrolly === 0 ? "transparent" : "white",
      }}
    >
      <Logo src="https://media.discordapp.net/attachments/1242891295110729881/1255133009514991616/LogoEvents.png?ex=667ff9b4&is=667ea834&hm=c8d6a2159b1b3e595fefcf2e1bfe06ccb9ffa62bbe4805d37a101f8008e8ba09&=&format=webp&quality=lossless&width=625&height=625" />
      {/* <InputNavBar /> */}
      <LinkContainerDesktop>
        {routes.map((el, index) => (
          <LinkNavBar
            key={index}
            title={el.title}
            href={el.href}
            functieDeApelare={handleClick}
          />
        ))}

        {user ? (
          <>
            <a onClick={() => navigate(`/profile`)}>Profile</a>{" "}
            <a onClick={handleLogout}>Logout</a>
          </>
        ) : (
          <a onClick={() => navigate(`/login`)}>Login</a>
        )}
      </LinkContainerDesktop>
      {showHamburger && <HamburgerMenu />}
    </NavBarContainer>
  );
}
export default NavBar;
