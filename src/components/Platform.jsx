import leftside from "../assets/images/leftside.png";
import leftside2 from "../assets/images/leftside2.png";
import leftside3 from "../assets/images/leftside3.png";
import SparkleIcon from "./common/SparkleIcon";

function Platform() {

  const cardsData = [
    {
      eyebrow: "Monitoring Systems",
      title: "Industrial Intelligence",
      description:
        "Smart factory dashboards and predictive monitoring systems designed to optimize large-scale operations.",
      image: leftside2,
    },

    {
      eyebrow: "Secure Transaction Layer",
      title: "Secure Finance Infrastructure",
      description:
        "High performance platforms built for secure digital banking, payment processing, and transaction systems.",
      image: leftside3,
    },
  ];

  return (
    <section className="platform secPdng" id="Platform">

      <div className="container">

        {/* Section Header */}
        <div className="section-header">

          <span className="eyebrow-headline">
            <SparkleIcon color="#4F46E5" /> Enterprise Platform Values
          </span>

          <h2 className="main-title">
            Scalable Solutions for <br />
            Modern Enterprises
          </h2>

          <p className="description-text">
            Designed to power mission-critical systems for modern organizations.
          </p>

        </div>

       
        <div className="dfl fwr jcb bg-white">

          <div className="lft_content mt30">

            <div className="content">

              <span className="eyebrow-headline">
                <SparkleIcon color="#94A3B8" /> Orchestrated Workflow
              </span>

              <h3>
                Enterprise Automation Platforms
              </h3>

              <p>
                Build Intelligent Systems that automate complex workflows,
                integrate enterprise data, and power modern digital operations.
              </p>

            </div>

          </div>

          <div className="rgt_content tar mt30">

            <img src={leftside} alt="Automation Platform" />

          </div>

        </div>

        {/* Bottom Cards */}
        <div className="dfl jcb mt20 grid2">

          {cardsData.map((item, index) => (
            <div className="cards bg-white" key={index}>

              <div className="dfl fwr jcb mt30">

                <div className="lft_content">

                  <div className="content">

                    <span className="eyebrow-headline">
                     <SparkleIcon color="#94A3B8" /> {item.eyebrow}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                  </div>

                </div>

                <div className="rgt_content tar">

                  <img src={item.image} alt={item.title} />

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Platform;