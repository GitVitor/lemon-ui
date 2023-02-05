import React from "react";
import { Logo } from "../Logo";
import { MenuIcon } from "../MenuIcon";
import * as s from "./style";

export const Header = () => (
  <s.Header>
    <s.LogoWrapper>
      <Logo />
    </s.LogoWrapper>
    <s.MenuIconWrapper>
      <MenuIcon />
    </s.MenuIconWrapper>
  </s.Header>
);
