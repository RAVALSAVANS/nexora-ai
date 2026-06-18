import card1 from "../assets/images/Card Image1.png";
import card2 from "../assets/images/Card Image2.png";
import card3 from "../assets/images/Card Image3.png";
import card4 from "../assets/images/Card Image4.png";
import SparkleIcon from "./common/SparkleIcon";
import ArrowTopRightIcon from "./common/ArrowTopRightIcon";
function Solutions() {

  const solutionsData = [
    {
      image: card1,
      title: "Commerce Platforms",
      description:
        "Custom storefronts, payment flows, and scalable digital retail ecosystems.",
    },

    {
      image: card2,
      title: "Industrial Automation",
      description:
        "Smart factory dashboards, predictive monitoring, and workflow optimization.",
    },

    {
      image: card3,
      title: "Healthcare Systems",
      description:
        "Secure platforms for patient data, diagnostics, and medical analytics.",
    },

    {
      image: card4,
      title: "Financial Technology",
      description:
        "High-performance platforms for digital banking and transaction processing.",
    },
  ];

  return (
    <section className="solutions-section" id="Solutions">

      <div className="secPdng">

        <div className="container">

          <div className="section-header">
            <span className="eyebrow-headline">
               <SparkleIcon color="#4F46E5" />

              Enterprise Solutions
            </span>

            <h2 className="main-title">
              We Build What Businesses Need
            </h2>

            <p className="description-text">
              Purpose-built systems for commerce, operations,
              healthcare, and finance, designed with modern
              infrastructure, intelligent automation, and
              enterprise-grade scalability.
            </p>

          </div>

          <div className="solutions-grid">

            {solutionsData.map((item, index) => (
              <div className="solution-card" key={index}>

                <img src={item.image} alt={item.title} />

                <h3 className="card-title">
                  {item.title}
                </h3>

                <p className="card-description">
                  {item.description}
                </p>

                <button className="btn">
                 <ArrowTopRightIcon />

                </button>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Solutions;