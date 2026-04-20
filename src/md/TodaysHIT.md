1. let handleSearch = (e)=>{
setSearchValue(e.target.value)
//ab agar array me se koi cheez dhundni hai toh filter hi aayega but idhar abhi dikkat hai filteredSongs hai sync function toh ye pehle chal jayega and setSearchValue baad me toh usko initially null milega
let filteredSongs = songs.filter((elem)=> elem.title === searchValue.title)
console.log("filteredSongs", filteredSongs)
}

 2.   let handleSearch = (e)=>{
     let value = e.target.value
     setSearchValue(value)
    //ab agar array me se koi cheez dhundni hai toh filter hi aayega but idhar abhi dikkat hai filteredSongs hai sync function toh ye pehle chal jayega and setSearchValue baad me toh usko initially null milega iska option hai searchValue pe mat karao treverse
    // let filteredSongs = songs.filter((elem)=> elem.title.toLowerCase() === value.title.toLowerCase()) //ab aise hume find nahi karna hai hume karna hai ek ek word pe song search
    let filteredSongs = songs.filter((elem)=> elem.title.toLowerCase().includes(value.toLowerCase()))
    console.log("filteredSongs", filteredSongs)
    setSearchedSong(filteredSongs)
    }

  ab aise toh hum nii kar sakte kyuki harek key stroke pe api calls bohot expensive ho jayegi ar backend me hum aise karte bhi nahi hai there we get a proper api


3. Debouncing : mai kuch ek particular time le lunga us time tak mai hold rahunga ar jab user ruk jayega type karna tab mai response de dunga 