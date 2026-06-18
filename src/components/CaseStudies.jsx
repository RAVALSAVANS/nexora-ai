import caseStudy1 from "../assets/images/case_studies1.png";
import caseStudy2 from "../assets/images/case_studies2.png";
import SparkleIcon from "../components/common/SparkleIcon";
import ArrowTopRightIcon from "./common/ArrowTopRightIcon";
function CaseStudies() {
  return (
    <section
      className="case_studies platform secPdng"
      id="case-studies"
    >

      <div className="container">

        
        <div className="section-header">

          <span className="eyebrow-headline">
           <SparkleIcon color="#4F46E5" /> Case Studies
          </span>

          <h2 className="main-title">
            Success Stories
          </h2>

          <p className="description-text">
            See how organizations use Nexora Systems
            to transform operations and accelerate
            digital innovation.
          </p>

        </div>

        <div className="cards bg-white">

          <div className="dfl fwr jcb">

            <div className="lft_content">

              <div className="content mt20">

                <span className="eyebrow-headline">
                    <SparkleIcon color="#94A3B8" /> Global Retail Chain
                  </span>

                <h3>
                  Smart Logistics Platform for
                  <br />
                  Global Retail Chain
                </h3>

                <p>
                  Reduced processing time by 43%
                  with real-time automation.
                </p>

                <a href="#" className="btn mt30">

                  Read full case study

                <ArrowTopRightIcon width={16} height={16} />

                </a>

              </div>

            </div>

            <div className="rgt_content tar">
              <img
                src={caseStudy1}
                alt="Case Study 1"
              />
            </div>

          </div>

        </div>

        {/* Card 2 */}
        <div className="cards bg-white mt50">

          <div className="dfl fwr jcb">

            <div className="rgt_content">
              <img
                src={caseStudy2}
                alt="Case Study 2"
              />
            </div>

            <div className="lft_content">

              <div className="content mt20">

                <span className="eyebrow-headline">
                 <SparkleIcon color="#94A3B8" /> Manufacturing Network
                </span>

                <h3>
                  AI Monitoring System for Manufacturing
                  <br />
                  Network
                </h3>

                <p>
                  Increased operational efficiency
                  across 12 facilities.
                </p>

                <a href="#" className="btn mt30">

                  Read full case study

                  <ArrowTopRightIcon width={16} height={16} />

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CaseStudies;