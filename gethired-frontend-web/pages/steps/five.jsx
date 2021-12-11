import Link from "next/link";
import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";
import Path from "../../components/Path";
import Advantage from "../../components/Advantage";

import chartLogo from "../../public/Icon.svg";
import securityLogo from "../../public/Icon-1.svg";
import squareLogo from "../../public/Icon-2.svg";

const Step5 = () => (
  <main className="main">
    <section className="main__content five">
      <h2 className="main__title">Know the advantages of GH-Code Tracker</h2>
      <article>
        <Advantage img={chartLogo} alt="chart logo" title="Measurement"/>
        <Advantage img={securityLogo} alt="blocker logo" title="Security"/>
        <Advantage img={squareLogo} alt="square logo" title="Integrity"/>
      </article>

      <Link href="/adminView">
        <a>
          <ButtonCTA name="Done" />
        </a>
      </Link>
    </section>

    <Path active={5}/>
  </main>
)

export default Step5;