import styled from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Logo>TESARAC</Logo>
      <MenuBars onClick={toggle}/>
      <NavMenu>
        {menuData.map((menuItem, index) => {
          return (
            <MenuLinks to={menuItem.link} key={index}>
              {menuItem.title}
            </MenuLinks>
          );
        })}
      </NavMenu>
      <NavButtonWrapper>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavButtonWrapper>
    </Nav>
  );
};

// Styles
const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  position: fixed;
  /* background-color: #000; */
  z-index: 100;
  width: 100%;
`;

const Logo = styled(Link)`
  color: #fff;
  font-style: italic;
  letter-spacing: 1px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #cd853f;
  }
`;

const MenuBars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 30px;
  /* transform: translate(-50%, 50%); */

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const MenuLinks = styled(Link)`
  color: #fff;
  transition: color 0.2s ease-in-out;
  padding: 0 1rem;

  &:hover {
    color: #cd853f;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Navbar;
