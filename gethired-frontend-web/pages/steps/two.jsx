import Link from "next/link";
import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";
import Path from "../../components/Path";

const Step2 = () => (
  <main className="main">
    <section className="main__content-step">
      <h2 className="main__title">Get your first token</h2>
      <p>
      In order to start tracking your data, you must have a token to GH-Code Tracking to identify your account. You can get that token in the below button
      </p>

      <Link href="/steps/two">
        <a>
          <ButtonCTA name="Get your token" />
        </a>
      </Link>
    </section>

    <Path active={2}/>
  </main>
)

export default Step2;