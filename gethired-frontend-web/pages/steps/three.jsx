import Image from "next/image";
import Link from "next/link";
import Path from "../../components/Path";
import TechImg from "../../public/gh.png"
import ButtonCTA from "../../components/ButtonCTA/ButtonCTA"

const Step3 = () => (

  <main className="main">
    <section className="main__content three">
      <h2 className="main__title">Paste your token in your VSCode extension</h2>
      <div>
        <p>
          Paste your current token in your VSCode extension to almost finish the setup of your GH-Code Tracker.
        </p>

        <Image width={400} height={250} src={TechImg} />
      </div>

      <Link href="/steps/four">
        <a>
          <ButtonCTA name="Next Step &raquo;" />
        </a>
      </Link>
    </section>

    <Path active={3}/>
  </main>
)

export default Step3;