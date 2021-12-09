import Link from "next/link";
import Image from "next/image";

const Navbar = () => (
  <header>
    <Link href="/">
      <a>
        <Image width={99} height={24} src="/images/LogoPlataforma.png" alt="logo"/>
      </a>
    </Link>
    <nav></nav>
  </header>
)

export default Navbar;