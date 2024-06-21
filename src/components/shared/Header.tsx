import { RoutePath } from "domain/routPaths";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  HEADER_BG_COLOR,
  BREAK_POINTS,
  MAIN_TEXT_COLOR,
  HEADER_HEIGHT,
} from "variables";
import LogoImage from "assets/icons/Logo.svg?react";
import AccountImage from "assets/icons/account.svg?react";
import SearchImage from "assets/icons/search.svg?react";
import HeartImage from "assets/icons/heart.svg?react";
import CartImage from "assets/icons/cart.svg?react";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT};
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: ${HEADER_BG_COLOR};
  z-index: 100000;
  transition: 100ms all ease-in-out;
  position: fixed;
  top: 0;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: ${BREAK_POINTS.laptopL};
  height: ${HEADER_HEIGHT};
  padding: 0 54px;
`;

const Logo = styled.a`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 75px;
`;

const MenuItem = styled.div`
  a {
    text-decoration: none;
    color: ${MAIN_TEXT_COLOR.default};
    font-size: 16px;

    &:visited {
      color: ${MAIN_TEXT_COLOR};
    }

    &:active {
      color: ${MAIN_TEXT_COLOR.active};
    }

    &:hover {
      color: ${MAIN_TEXT_COLOR.hover};
    }
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
`;

const ActionItem = styled.div`
  display: flex;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: rgba(200, 200, 200, 0.1);
  }
`;

interface IMenuItem {
  link: string;
  caption: string;
}

const menuItems: IMenuItem[] = [
  { link: RoutePath.baseUrl, caption: "Home" },
  { link: RoutePath.pages.shop, caption: "Shop" },
  { link: RoutePath.pages.about, caption: "About" },
  { link: RoutePath.pages.contact, caption: "Contact" },
];

export default function Header() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    // Очистка при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyles = {
    boxShadow: hasShadow ? "0px 5px 5px 0px rgba(0,0,0,0.2)" : undefined,
    height: hasShadow ? `calc(${HEADER_HEIGHT} - 3px)` : HEADER_HEIGHT,
  };

  return (
    <Wrapper>
      <Overlay style={headerStyles}>
        <Inner>
          <Logo href="/">
            <LogoImage />
          </Logo>
          <Menu>
            {menuItems.map(({ link, caption }) => (
              <MenuItem key={link}>
                <Link to={link}>{caption}</Link>
              </MenuItem>
            ))}
          </Menu>
          <UserActions>
            <ActionItem>
              <AccountImage />
            </ActionItem>
            <ActionItem>
              <SearchImage />
            </ActionItem>
            <ActionItem>
              <HeartImage />
            </ActionItem>
            <ActionItem>
              <CartImage />
            </ActionItem>
          </UserActions>
        </Inner>
      </Overlay>
    </Wrapper>
  );
}
