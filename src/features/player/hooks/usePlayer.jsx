import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { pause, play } from "../state/PlayerSlice"

export let usePlayer = () => {
    let dispatch = useDispatch()

    //hume ek audio chahiye jisme gaana bajega isi ke andar ek dynamic Audio ref lenge jiske andar hum Audio tag ko as a class use karenge
   let audioRef = useRef(new Audio()) //toh ye kabhi bhi rerender pe naya instance nahi banayega 

   let {currentPlayingSong, isPlaying} = useSelector((store)=>store.player)

   useEffect(()=>{
    if(!currentPlayingSong) return 

    audioRef.current.src = currentPlayingSong.url //ek error aayegi kyuki bydefault currentPlayingSong null rahegi toh hume aisa kuch code likhna hai ki wo directly yha tak naa pouche
    audioRef.current.play()
   },[currentPlayingSong]) //toh ye ab jitni baar currentPlayingSong change hota rahega utni baar change hota rahega

   useEffect(()=>{
     if(!currentPlayingSong) return 

    if(isPlaying){
        audioRef.current.play()
    }
    else{
        audioRef.current.pause()
    }
   },[isPlaying])

   let togglePlayAndPause = ()=>{
    if(isPlaying){
        dispatch(pause())
    }else{
        dispatch(play())
    }
   }

   return {
    togglePlayAndPause
   }
}
