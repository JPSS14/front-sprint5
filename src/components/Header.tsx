import React, { useContext } from "react";
import styled from "styled-components";
import FilterContext from "../contexts/FilterContext";
import Menu from "./Menu";

const StyledHeader = styled.header`
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;

    @media (max-width: 1200px) {
        position: fixed;
        top: 0;
        background-color: #fff;
    }
`;

const HeaderContainer = styled.div`
    margin: auto;
    width: 95%;
    max-width: 1200px;
`;

const HeaderMobile = styled.div`
    display: none;
    margin-bottom: 25px;

    @media (max-width: 1200px) {
        display: flex;
        align-items: center;
    }
`;

const HeaderDesktop = styled.div`
    @media (max-width: 1200px) {
        display: none;
    }
`;

// FIXME: --active
const HeaderDrawer = styled.div`
    width: 24px;
    opacity: 54%;
    display: none;
    display: block;
`;

// FIXME: .close__title
const MenuTitle = styled.div`
    text-transform: lowercase;
    font-size: 0.5625rem;
    font-weight: 400;
    line-height: 0;
`;

const HeaderLogo = styled.h1`
    height: 70px;
    line-height: 70px;
    text-align: center;

    @media (max-width: 1200px) {
        flex-grow: 1;
    }
`;

const HeaderImg = styled.img`
    height: 25px;
    transform: translateY(10px);
`;

const HeaderSearch = styled.div`
    position: relative;
`;

const HeaderIcon = styled.img`
  width: 24px;
  opacity: 26%;
  top: 8px;
  position: absolute;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.26);
  line-height: 40px;
`;

const HeaderInput = styled.input`
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding-left: 40px;

    &:hover {
    border-color: #000;
    }

    &::placeholder {
    font-size: 0.9375rem;
    font-weight: 600;
    font-family: "Open Sans";
    color: #9b9b9b;
    }
`;

function Header() {

    const { setFilter } = useContext(FilterContext);

    return (
        <StyledHeader>
            <HeaderContainer>
                <HeaderMobile>
                    <HeaderDrawer>
                        <img src="/assets/menu.svg" alt="menu" />
                        <MenuTitle>menu</MenuTitle>
                    </HeaderDrawer>
                    {/* <HeaderDrawer>
                        <img src="/assets/close.svg" alt="fechar menu" />
                        <MenuTitle>fechar</MenuTitle>
                    </HeaderDrawer> */}
                    <HeaderLogo>
                        <HeaderImg src="/assets/rchlo.svg" alt="Logo" />
                    </HeaderLogo>
                </HeaderMobile>
                <HeaderDesktop>
                    <HeaderLogo>
                        <HeaderImg src="/assets/riachuelo.svg" alt="Logo" />
                    </HeaderLogo>
                </HeaderDesktop>
                <HeaderSearch>
                    <HeaderIcon src="/assets/search.svg" alt="lupa" />
                    <HeaderInput type="search" placeholder="O que você está procurando?"
                        onChange={(event) => setFilter(event.target.value)}
                    />
                </HeaderSearch>

                <Menu />
            </HeaderContainer>
        </StyledHeader>
    );
}

export default Header;