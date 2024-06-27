import LinkNavBar from "./LinkNavBar";
import { routes } from "./NavBar";
import { LinkContainer, DropdownContainer } from "./NavBar.style";

function Dropdown({ functieDeApelatinDropdown }) {
  return (
    <DropdownContainer>
      <LinkContainer>
        {routes.map((el, index) => (
          <LinkNavBar
            key={name + index}
            title={el.title}
            href={el.href}
            functieDeApelat={functieDeApelatinDropdown}
          />
        ))}
      </LinkContainer>
    </DropdownContainer>
  );
}

export default Dropdown;
