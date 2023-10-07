import React from "react";
import Feature from "../../Components/Features";
import "./Home.css";
import bgImage from "../../assets/home-image-bg.png";
import homeImageIcon from "../../assets/home-image-icons.png";

const FeatureData = [
  {
    title: "Mine-To-Mill-To-Mine Optimization",
    desc: "NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.",
    image:
      "https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg",
  },
  {
    type: "rev",
    title: "Sustainability",
    desc: "Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers. With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.",
    image:
      "https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg",
  },
  {
    title: "Mineral Processing",
    desc: "NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.",
    image:
      "https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg",
  },
  {
    type: "rev",
    title: "Oil & Gas",
    desc: "Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.",
    image:
      "https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png",
  },
];

const HomePage = () => {
  return (
    <div className="home">
      <div className="bgimgdiv">
        <img src={bgImage} alt="bgimage" className="bgimage" />
      </div>
      <div className="home-content">
        <div className="home-title-div">
          <p className="home-title">
            Data-powdered solutions for Industiral Excellence
          </p>
          <button className="home-btn">Read More</button>
        </div>
        <img src={homeImageIcon} className="home-image" />
      </div>
      {FeatureData.map((feature) => {
        return (
          <Feature
            type={feature.type}
            title={feature.title}
            desc={feature.desc}
            image={feature.image}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
