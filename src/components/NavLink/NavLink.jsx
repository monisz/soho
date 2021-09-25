import { Nav } from "react-bootstrap";
import Cart from "../Cart/Cart";
import './NavLink.css';

const itemsNav = [
  {
    href: 'https://www.instagram.com/soho.muebles/',
    src: '/imagenes/ig_nav.svg',
    alt: 'ig_soho',
  },
  {
    href: 'https://www.facebook.com/Soho-Muebles-110702924580343',
    src: 'imagenes/fb_nav.svg',
    alt: 'fb_soho'
  },
  {
    href: 'https://wa.me/message/OCTVKP3KIITBI1',
    src: 'imagenes/wpp_nav.svg',
    alt: 'wpp_soho'
  }
];

const NavLink = () => {
  return (
    <Nav className="nav-iconos" >
      {
        itemsNav.map(({ href, src, alt }, i) => (
          <Nav.Link key={i} href={href} target="_blank">
            <img src={src} alt={alt} />
          </Nav.Link>
        ))
      }
      <Cart />
    </Nav>
  )
};

export default NavLink;
