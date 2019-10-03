import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextView = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        marginTop: 4
    },
    text: {
        textAlign: "center"
    }
});

export default TextView;