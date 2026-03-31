import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../Grid/Grid";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, endpoint, showToggle = true, type }) {
  const [data, setData] = useState([]);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(endpoint);
      setData(res.data);
    };

    fetchData();
  }, [endpoint]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        {showToggle && (
          <button
            className={styles.button}
            onClick={() => setCollapse(!collapse)}
          >
            {collapse ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {showToggle ? (
        collapse ? (
          <Grid
            data={data}
            renderItem={(item) => <Card item={item} type={type} />}
          />
        ) : (
          <Carousel
            data={data}
            renderItem={(item) => <Card item={item} type={type} />}
          />
        )
      ) : (
        <Carousel
          data={data}
          renderItem={(item) => <Card item={item} type={type} />}
        />
      )}
    </div>
  );
}

export default Section;