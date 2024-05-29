import { useState } from "react";
import Dropdonw from "./Dropdown";
import LinkNavBar from "./LinkNavBar";

import {
  Logo,
  NavBarContainer,
  ButtonDropdown,
  LinkContainerDesktop,
  InputNavBar,
} from "./NavBar.style";

export const routes = [
  { title: "Home", href: "home" },
  { title: "Events", href: "events" },
  { title: "Contacts", href: "contacts" },
  { title: "Login", href: "Login" },
];
function NavBar() {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const handleClick = (titlu) => {
    console.log("Esti pe titlul ", titlu);
  };
  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  const time = "12:23";
  return (
    <NavBarContainer>
      <Logo src="data:image/png;base64,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" />
      <InputNavBar />
      <LinkContainerDesktop>
        {routes.map((el, index) => (
          <LinkNavBar
            key={index}
            title={el.title}
            href={el.href}
            functieDeAplelare={handleClick}
          />
        ))}
      </LinkContainerDesktop>
      <ButtonDropdown onClick={() => handleDisplayDropdown()}>
        Press me!
      </ButtonDropdown>
      {displayDropdown && (
        <Dropdonw functieDeAplelareinDropdown={handleClick} />
      )}
    </NavBarContainer>
  );
}
export default NavBar;
