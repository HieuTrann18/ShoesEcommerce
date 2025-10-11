import React from "react";
import Header from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import SectionHeader from "@components/SectionHeader/SectionHeader";
import InfoSection from "@components/InfoSection/InfoSection";
import Layout from "@components/Layout/Layout";
import Product from "@components/Product/Product";
import styles from "./style.module.scss";

const HomePage = () => {
  const { header__parent } = styles;
  return (
    <div className={header__parent}>
      <Header />
      <Banner />
      <Layout>
        <InfoSection />
        <SectionHeader
          title={"Our best products"}
          description={"don't miss super offers"}
        />
        <Product />
      </Layout>
    </div>
  );
};

export default HomePage;
