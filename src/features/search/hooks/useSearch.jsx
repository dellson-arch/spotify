import { useState } from "react";
import { allSongs } from "../../dashboard/api/SongsApi";

export let useSearch = () => {
  let songs = allSongs();

  const [searchValue, setSearchValue] = useState(null);
  const [SearchedSong, setSearchedSong] = useState([]);

  let timer;

  //    console.log(searchValue)

  let handleSearch = (e) => {
    let value = e.target.value;

    clearTimeout(timer); //length - 1 matlab mera agar 5 length ka array hai toh woh 4 length ke timeOuts ko clear kar chuka hoga and sirf ek ke liye chalega

    timer = setTimeout(() => {
      setSearchValue(value);

      let filteredSongs = songs.filter((elem) =>
        elem.title.toLowerCase().startsWith(value.toLowerCase()),
      );

      console.log("running....");
      setSearchedSong(filteredSongs);
    }, 2000);
  };

  return {
    handleSearch,
    searchValue,
    SearchedSong,
  };
};
