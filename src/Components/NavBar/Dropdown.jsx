import LinkNavBar from "./LinkNavBar";
import { routes } from "./NavBar";
import { DropdownContainer, LinkContainer } from "./NavBar.style";
function Dropdonw({ functieDeAplelareinDropdown }) {
  return (
    <>
      <DropdownContainer>
        <LinkContainer>
          {routes.map((el, index) => (
            <LinkNavBar
              key={index}
              title={el.title}
              href={el.href}
              functieDeAplelare={functieDeAplelareinDropdown}
            />
          ))}
        </LinkContainer>
      </DropdownContainer>
    </>
  );
}
export default Dropdonw;
