import Link from "next/link";
import Path from "../../components/Path";
import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";
import Checkboxes from "../../containers/Checkboxes/Checkboxes";

const args1 = {
  title: "Data to show",
  props: [
      {
          name: "Development time",
          checked: true,
      },
      {
          name: "Languages",
          checked: true,
      },
      {
          name: "Projects worked",
          checked: true,
      },
      {
          name: "Operative system",
          checked: true,
      }
  ]
}

const args2 = {
  title: "Data to track",
  props: [
      {
          name: "Development time",
          checked: true,
      },
      {
          name: "Languages",
          checked: true,
      },
      {
          name: "Projects worked",
          checked: true,
      },
      {
          name: "Operative system",
          checked: true,
      }
  ]
}


const Step3 = () => (

  <main className="main">
    <section className="main__content four">
      <h2 className="main__title">Choose the data you want to track & show</h2>
      <article>
        {/* <Checkboxes title="Data to show" props={Args} />

        <Checkboxes title="Data to track" props={Args} /> */}
        <Checkboxes {...args1} onChecked={() => console.log('check')}/>
        <Checkboxes {...args2} onChecked={() => console.log('check')}/>
      </article>

      <Link href="/steps/five">
        <a>
          <ButtonCTA name="Next Step &raquo;" />
        </a>
      </Link>
    </section>

    <Path active={4}/>
  </main>
)

export default Step3;