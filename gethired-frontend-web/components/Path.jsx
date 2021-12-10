import Link from "next/link";
const steps = [1, 2, 3, 4, 5];

const Path = ({ active }) => (
  <section className="path">
    <hr />
    {
      steps.map(step => (
        <div className={`path__item ${active == step ? "active" : null}`} key={step}>
          <Link href="#">
            <a>
              {step}
            </a>
          </Link>
        </div>
      ))
    }
  </section>
)

export default Path;