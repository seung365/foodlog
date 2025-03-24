import Link from "next/link";
import logoImag from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from '@/components/main-header/main-header-background';

export default function MainHeader() {
    return (
      <>
        <MainHeaderBackground/>
        <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImag} alt="A plate with food" priority/>
          NextLevel Foods
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
    )
}