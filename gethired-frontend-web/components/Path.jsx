import Link from "next/link";
const steps = [{value: 1, url: "/"}, {value: 2, url: "/steps/two"}, {value: 3, url: "/steps/three"}, {value: 4, url: "/steps/four"}, {value: 5, url: "/steps/five"}];

const Path = ({ active }) => (
  <section className="path">
    <hr />
    {
      steps.map(step => (
        <div className={`path__item ${active == step.value ? "active" : null}`} key={step}>
          <Link href={step.url}>
            <a>
              {step.value}
            </a>
          </Link>
        </div>
      ))
    }
  </section>
)

export default Path;