import React, { useState } from "react";
import { SafeAreaView, View, FlatList} from "react-native";
import music_data from './music-data.json';
import styles from './MusicStyle';
import SongCard from "./components/SongCard";
import SearcBar from "./components/SearcBar";

function App() {
  
  const [list,setList] = useState (music_data);

  const renderSong = ({item}) => <SongCard song ={item}/>

  const renderSeperator = () => <View style={styles.seperator} />

  const handleSearch = text =>{
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

       return currentTitle.indexOf(searchedText) > -1 ;
    });

    setList(filteredList);

  };
  
return(
  <SafeAreaView style={styles.container}>
    <SearcBar onSearch={handleSearch}/>
    <FlatList 
    keyExtractor={(item) => item.id}
    data={list} 
    renderItem={renderSong}
    ItemSeparatorComponent={renderSeperator}
    />

</SafeAreaView>
);
}

export default App;

