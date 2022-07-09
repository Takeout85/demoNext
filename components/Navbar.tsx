import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.scss";
const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];
export const Navbar = () => {
  return (
    <nav className={styles['Navbar-container']} >
      {menuItems.map(({text, href}) => (
        <ActiveLink key={href} text={text} href={href}/>
      ))}
    </nav>

  )
}
