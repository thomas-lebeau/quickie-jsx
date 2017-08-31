import style from './style';
import { h } from 'preact';

export const Header = ({ title, children }) => (
  <header class={style.header}>
    <h1>{title}</h1>
    <nav>{children.map(child => child)}</nav>
  </header>
);
export default Header;
