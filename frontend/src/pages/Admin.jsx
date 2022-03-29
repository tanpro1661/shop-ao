import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import heroSliderData from "../assets/fake-data/heroSliderData";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Card from "../components/Card";
import policy from "../assets/fake-data/card";
import Grid from "../components/Grid";
import { Link } from "react-router-dom";
// import productData from "../assets/fake-data/products";
import Product from "../components/Product";
import banner from "../assets/images/banner.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/callAPI";

const Admin = () => {
  const admin = JSON.parse(localStorage.getItem("user")).isAdmin;
  const { products } = useSelector((state) => state.products);
  const { loading } = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const [totalProducts, setTotalProducts] = useState([]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setTotalProducts(products);
  }, [products]);

  return (
    <div>
      {loading && <Loading />}
      <Header admin={admin} />
      <Helmet title="Trang Chủ">
        <HeroSlider
          data={heroSliderData}
          control={true}
          auto={true}
          timeOut={5000}
        />
        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {policy.map((item, index) => (
                <Link to="/card" key={index}>
                  <Card name={item.name} desc={item.desc} icon={item.icon} />
                </Link>
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Top Sản Phẩm</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {totalProducts.slice(0, 4).map((item, index) => (
                <Product
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                  admin={admin}
                  id={item._id}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <Link to="/catalog">
              <img src={banner} alt="" />
            </Link>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Sản Phẩm Mới</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {totalProducts.slice(0, 8).map((item, index) => (
                <Product
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                  admin={admin}
                  id={item._id}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Phổ Biến</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {totalProducts.slice(0, 12).map((item, index) => (
                <Product
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                  admin={admin}
                  id={item._id}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </Helmet>
      <Footer />
    </div>
  );
};

export default Admin;
