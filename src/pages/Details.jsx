import React, { useEffect, useState } from "react";
import { HeaderWrapper } from "../components/styled.js";
import Product from "../components/Product";
import Header from "../components/Header";
import LeftPannel from "../components/LeftPannel.jsx";
import { getProducts } from "../Services/api";
import { Tabs } from "antd";
import Footer from "../components/Footer.jsx";

function Details() {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [activeKey, setActiveKey] = useState("1");

  useEffect(() => {
    getProducts().then((products) => {
      setData(products);
      setSortedData(products);
    });
  }, []);

  const handleChange = (key) => {
    setActiveKey(key);
    let sorted = [...data];

    if (key === "2") {
      // Low → High
      sorted.sort((a, b) => a.price - b.price);
      console.log(sorted,'low')
    } else if (key === "3") {
      // High → Low
      sorted.sort((a, b) => b.price - a.price);
      console.log(sorted,'heigh')
    } else {
      // Popularity or default
      sorted = data;
    }

    setSortedData(sorted);
  };

  return (
    <HeaderWrapper>
      <Header />
      <aside>
        <LeftPannel />
        <div style={{ flex: 1 }}>
          <Tabs
            activeKey={activeKey}
            onChange={handleChange}
            items={[
              { label: "Popularity", key: "1" },
              { label: "Price -- Low to High", key: "2" },
              { label: "Price -- High to Low", key: "3" },
            ]}
          />
          {/* ✅ Product rendered once, always gets updated sortedData */}
          <Product products={sortedData} />
        </div>
      </aside>
      <Footer />
    </HeaderWrapper>
  );
}

export default Details;
