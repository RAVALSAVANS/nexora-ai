import ctaImage from "../assets/images/image163.png";
import SparkleIcon from "./common/SparkleIcon";
function CTA() {
  return (
    <section className="cta-sec secPdng">

      <div className="container">

        <div
          className="dfl alc fwr jcb bg-black"
          style={{ borderRadius: "8px", gap: "20px" }}
        >

          {/* Left Content */}
          <div className="lft_content">

            <div className="content">

              <span className="eyebrow-headline white">

               <SparkleIcon color="#ffffff" />

                Enterprise AI Systems

              </span>

              <h3 className="white">
                Let’s Build Something
                <br />
                Powerful
              </h3>

              <p>
                Talk to our solution experts and discover how we can
                <br />
                accelerate your digital roadmap.
              </p>

              <a href="#" className="btn">

                Schedule Consultation

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <path
                    d="M8.25 13.875C8.25 14.2892 8.58579 14.625 9 14.625C9.41421 14.625 9.75 14.2892 9.75 13.875V9.75H13.875C14.2892 9.75 14.625 9.41421 14.625 9C14.625 8.58579 14.2892 8.25 13.875 8.25H9.75V4.125C9.75 3.71079 9.41421 3.375 9 3.375C8.58579 3.375 8.25 3.71079 8.25 4.125V8.25H4.125C3.71079 8.25 3.375 8.58579 3.375 9C3.375 9.41421 3.71079 9.75 4.125 9.75H8.25V13.875Z"
                    fill="white"
                  />

                </svg>

              </a>

            </div>

          </div>

          {/* Right Image */}
          <div className="rgt_content dfl alc tar">
            <img src={ctaImage} alt="CTA" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;