import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSong, pause, play, prevSong } from "../state/PlayerSlice";

export let usePlayer = () => {
  let dispatch = useDispatch();

  //hume ek audio chahiye jisme gaana bajega isi ke andar ek dynamic Audio ref lenge jiske andar hum Audio tag ko as a class use karenge
  let audioRef = useRef(new Audio()); //toh ye kabhi bhi rerender pe naya instance nahi banayega
    //  console.log(audioRef)

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  let { currentPlayingSong, isPlaying } = useSelector((store) => store.player);

  useEffect(() => {
    const audio = audioRef.current;

    // These functions sync the "Invisible" Audio keys to "Visible" React State
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  useEffect(() => {
    if (!currentPlayingSong) return;

    audioRef.current.src = currentPlayingSong.url; //ek error aayegi kyuki bydefault currentPlayingSong null rahegi toh hume aisa kuch code likhna hai ki wo directly yha tak naa pouche
    audioRef.current.play();
  }, [currentPlayingSong]); //toh ye ab jitni baar currentPlayingSong change hota rahega utni baar change hota rahega

  useEffect(() => {
    if (!currentPlayingSong) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
 
  // UI Helpers
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }; 

  const handleSeek = (e) => {
    // e is the event from the input range
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  let togglePlayAndPause = () => {
    if (isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play());
    }
  };

  const handleNextSong = () => dispatch(nextSong());
  const handlePrevSong = () => dispatch(prevSong());

  return {
    togglePlayAndPause,
    handleNextSong,
    handlePrevSong,
    isPlaying,
    handleSeek,
    displayTime: formatTime(currentTime),
    displayDuration: formatTime(duration),
    progress: (currentTime / duration) * 100 || 0
  };
};
