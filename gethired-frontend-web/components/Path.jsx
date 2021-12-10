const steps = [1, 2, 3, 4, 5];

const Path = ({ active }) => (
  <section className="path">
    {
      steps.map(step => (
        <div className="path__item" key={step}>{step}</div>
      ))
    }
  </section>
)

export default Path;