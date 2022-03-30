import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Accessory from "../../components/Accessory/Accessory";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import Helmet from "../../components/Helmet/Helmet";
import Section, { SectionBody, SectionTitle } from "../../components/Section/Section";
import { getAllAccessories } from "../../redux/callAPI";

const Accessories = () => {
  const { accessoryid } = useParams();
  const { accessories } = useSelector((state) => state.accessories);
  const dispatch = useDispatch();
  const [accessory, setAccessory] = useState({});
  const [totalAccessories, setTotalAccessories] = useState([]);

  useEffect(() => {
    if (accessories.length === 0) {
      dispatch(getAllAccessories());
    } else {
      setAccessory(accessories.find((item) => item._id === accessoryid));
      setTotalAccessories(accessories);
    }
  }, [dispatch, accessories, accessoryid]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(accessoryid);
  return (
    <Helmet title="Phụ Kiện">
      <Header />
      <Section>
        <SectionTitle className="border-bottom">Top Sản Phẩm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {totalAccessories.slice(0, 4).map((item, index) => (
              <Accessory
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                id={item._id}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          <Link to="/">
            <img
              src="https://bizweb.dktcdn.net/100/269/201/themes/604642/assets/slide-img3.jpg?1621590443633"
              alt=""
              className=""
            />
          </Link>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Sản Phẩm Mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {totalAccessories?.slice(0, 8).map((item, index) => (
              <Accessory
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                id={item._id}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Sản phẩm bán chạy</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {totalAccessories?.slice(0, 12).map((item, index) => (
              <Accessory
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                id={item._id}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Accessories;
