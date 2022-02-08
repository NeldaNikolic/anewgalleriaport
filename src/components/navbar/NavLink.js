import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  let animate = { opacity: 0, y: -40 };
  let animating = { opacity: 1, y: 0 };

  return (
    <nav>
      <ul>
        <motion.li
          initial={animate}
          animate={animating}
          onClhick={() => props.isMobile && props.closeMobilMenu()}
        >
          <Link to="/">Home</Link>
        </motion.li>

        <motion.li
          initial={animate}
          animate={animating}
          onClick={() => props.isMobile && props.closeMobilMenu()}
        >
          <Link to="/about">About</Link>
        </motion.li>

        <motion.li
          initial={animate}
          animate={animating}
          onClick={() => props.isMobile && props.closeMobilMenu()}
        >
          <Link to="/galleria">Galleria</Link>
        </motion.li>

        <motion.li
          initial={animate}
          animate={animating}
          onClick={() => props.isMobile && props.closeMobilMenu()}
        >
          <Link to="/contact">Contact</Link>
        </motion.li>

        <motion.li
          initial={animate}
          animate={animating}
          onClick={() => props.isMobile && props.closeMobilMenu()}
        >
          <Link to="/view-port">View Port</Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default NavLink;
