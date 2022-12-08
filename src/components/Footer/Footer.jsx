import "./Footer.css";
import { Container, Box, Grid } from "@mui/material";
import Icon from "@mui/material/Icon";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/CabralE/Vplaylist-client-2">Frontend</a>
        </li>
        <li>
          <a href="https://github.com/CabralE/VplayServer">Backend</a>
        </li>
        <li>
          <a href="mailto:edwardcabral31@gmail.com">Email</a>
        </li>
        <li>
          <a href="https://edward-cabral-portfolio.netlify.app/">Portfolio</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/edward-cabral/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/CabralE">Github</a>
        </li>
        <li>
          <p>👋</p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
