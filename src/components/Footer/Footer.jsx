import "./Footer.css";
import { Container, Box, Grid } from "@mui/material";
import Icon from "@mui/material/Icon";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://github.com/CabralE/Vplaylist-client-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend
          </a>
        </li>
        <li>
          <a
            href="https://github.com/CabralE/VplayServer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend
          </a>
        </li>
        <li>
          <a
            href="mailto:edwardcabral31@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="https://edward-cabral-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/edward-cabral/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/CabralE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
