import item1 from "../assets/images/Item1.png";
import item2 from "../assets/images/Item2.png";
import item3 from "../assets/images/Item3.png";

import SparkleIcon from "./common/SparkleIcon";
function Ecosystem() {

  const ecosystemItems = [
    item1,
    item2,
    item3,
  ];

  return (
    <section className="ecosytem secPdng">

      <div className="container">

        <div className="dfl fwr jcb">
          <div className="lft_content">
            <div className="content">

              <span className="eyebrow-headline">
               <SparkleIcon color="#94A3B8" /> Technology Ecosystem
              </span>

              <h3>
                Technology Alliances
              </h3>

              <p>
                We partner with leading technology platforms to deliver scalable, <br />
                secure, and high-performance enterprise solutions.
              </p>

            </div>

          </div>

          {/* Right Images */}
          <div className="rgt_content dfl alc tar">

            {ecosystemItems.map((item, index) => (
              <div className="item" key={index}>

                <img
                  src={item}
                  alt={`ecosystem-${index}`}
                />

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Ecosystem;