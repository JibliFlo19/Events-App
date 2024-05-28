import { Logo, NavBarContainer, SearchNavBar } from "./NavBar.style";
export const routes = [
  { title: "Home", href: "home" },
  { title: "Events", href: "events" },
  { title: "Contacts", href: "contacts" },
  { title: "Login", href: "login" },
];
function NavBar() {
  return (
    <>
      <NavBarContainer>
        <Logo
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30163918/1241-768x591.png"
          alt=""
        />
        <SearchNavBar type="text" />
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        Dropdown
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </NavBarContainer>
    </>
  );
}
export default NavBar;
