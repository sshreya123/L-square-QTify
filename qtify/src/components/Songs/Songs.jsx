import React, { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

import styles from "./Songs.module.css";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    const fetchSongs = async () => {
      const res = await axios.get(
        "https://qtify-backend.labs.crio.do/songs"
      );
      setSongs(res.data);
    };

    const fetchGenres = async () => {
      const res = await axios.get(
        "https://qtify-backend.labs.crio.do/genres"
      );
      setGenres(res.data.data);
    };

    fetchSongs();
    fetchGenres();
  }, []);

  const filteredSongs =
    selected === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selected);

  return (
    <div className={styles.section}>
      <h2>Songs</h2>

      <Tabs
        value={selected}
        onChange={(e, newValue) => setSelected(newValue)}
      >
        <Tab label="All" value="all" />

        {genres.map((genre) => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
          />
        ))}
      </Tabs>

      <Carousel
        data={filteredSongs}
        renderItem={(song) => <Card item={song} type="song" />}
      />
    </div>
  );
}

export default Songs;