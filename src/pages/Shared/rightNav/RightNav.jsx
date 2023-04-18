import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGofore, FaGithub, FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";
import QZone from "../Qzone/Qzone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h3>Login With</h3>
      <Button variant="outline-primary">
        <FaGofore /> Login With Google
      </Button>
      <Button variant="outline-secondary mt-3">
        <FaGithub /> Login With Github
      </Button>

      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebookF/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
