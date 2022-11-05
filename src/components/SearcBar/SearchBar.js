import React from "react";
import {ProgressViewIOSComponent, TextInput, View} from "react-native";
import styles from './SearchBarStyle';


const SearcBar = props => {



    return(
        <View style={styles.container}>
            <TextInput placeholder="Ara..."
            onChangeText={props.onSearch} />
        </View>
    )
}

export default SearcBar;