import NavLink from "./NavLink";
import classes from "./NavBar.module.css";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import { useState } from "react";


const MobilNav = () => {
  const [open, setOpen] = useState(false);

  const menuIconn = (
    <BsFillGrid3X3GapFill
      className={classes.MenuIcon}
      size="50px"
      color="white"
      onClick={() => setOpen(true)}
    />
  );

  const CloseIconn = (
    <BiX
      className={classes.MenuIcon}
      size="50px"
      color="white"
      onClick={() => setOpen(false)}
    />
  );

  const closeMobilMenu = () => setOpen(false);
  return (
    <nav className={classes.FlexNav}>
      {open ? CloseIconn : menuIconn}
      {open && <NavLink isMobile={true} closeMobilMenu={closeMobilMenu} />}
    </nav>
  );
};

export default MobilNav;
