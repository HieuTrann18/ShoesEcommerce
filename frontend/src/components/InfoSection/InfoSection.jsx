import React from "react";
import Layout from "@components/Layout/Layout";
import { dataInfo } from "./constant";
import InfoCard from "./InfoCard/InfoCard";
import styles from "./style.module.scss";
const InfoSection = () => {
  const { infoSection__container } = styles;
  return (
    <div>
      <Layout>
        <div className={infoSection__container}>
          {dataInfo.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default InfoSection;
