import React from "react";
import Header from "@components/Header/Header";
import Layout from "@components/Layout/Layout";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Banner from "./OurShopComponents/Banner";
import { OurShopProvider } from "../../contexts/OurShopProvider";
import Filter from "./OurShopComponents/Filter";

const OurShop = () => {
  const { shop__container, shop__function, special__text, btn_back } = styles;
  const navigate = useNavigate();

  const handleBackPreviousPage = () => {
    navigate(-1);
  };

  return (
    <OurShopProvider>
      <Header />
      <Layout>
        <div className={shop__container}>
          <div className={shop__function}>
            <div>
              Home &gt; <span className={special__text}>Shop</span>
            </div>
            <div onClick={() => handleBackPreviousPage()} className={btn_back}>
              &lt; Return to previous
            </div>
          </div>
        </div>
        <Banner />
        <div>
          <Filter />
        </div>
      </Layout>
    </OurShopProvider>
  );
};

export default OurShop;
