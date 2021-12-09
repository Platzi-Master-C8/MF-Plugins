import Link from "next/link";
import Image from "next/image";

const Navbar = () => (
  <header>
    <div>
      <Link href="/">
        <a>
          <Image width={135.6} height={36} src="/images/LogoPlataforma.png" alt="logo"/>
        </a>
      </Link>
      <nav></nav>
    </div>
  </header>
)

export default Navbar;