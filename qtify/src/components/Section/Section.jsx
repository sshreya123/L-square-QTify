import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../Grid/Grid";
import styles from "./Section.module.css";

function Section({ title }) {
  const [albums, setAlbums] = useState([]);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await axios.get(
          "https://qtify-backend.labs.crio.do/albums/top"
        );
        setAlbums(res.data);
        console.log(albums)
      } catch (error) {
        console.log(error);
      }
    };

    fetchAlbums();
  }, []);

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

      {!collapse && <Grid data={albums} />}

    </div>
  );
}

export default Section;