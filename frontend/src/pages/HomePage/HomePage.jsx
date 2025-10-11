import React, { useEffect, useState } from "react";
import Header from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import SectionHeader from "@components/SectionHeader/SectionHeader";
import InfoSection from "@components/InfoSection/InfoSection";
import Layout from "@components/Layout/Layout";
import ProductOutStanding from "@components/ProductOutStanding/ProductOutStanding";
import ProductList from "@components/ProductList/ProductList";
import styles from "./style.module.scss";
import productApi from "../../apis/productApi";

const HomePage = () => {
  const { header__parent } = styles;

  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await productApi.getAll();
      setListProduct(res.data.contents);
    };
    loadData();
  }, []);

  console.log("check props", listProduct);
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
        <ProductOutStanding data={listProduct.slice(0, 2)} />
        <ProductList data={listProduct.slice(3, 15)} />
      </Layout>
    </div>
  );
};

export default HomePage;
