import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../Grid/Grid";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      const res = await axios.get(endpoint);
      setAlbums(res.data);
    };

    fetchAlbums();
  }, [endpoint]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button
          className={styles.button}
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? "Show All" : "Collapse"}
        </button>
      </div>

      {collapse ? (
        <Carousel
          data={albums}
          renderItem={(album) => <Card album={album} />}
        />
      ) : (
        <Grid data={albums} />
      )}
    </div>
  );
}

export default Section;