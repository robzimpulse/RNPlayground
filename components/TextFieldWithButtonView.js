import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, TextInput, View, Text } from "react-native";

const TextFieldWithButtonView = props => {

    const [input, setInput] = useState(props.value);
    const onChangeTextHandler = (text) => setInput(text);
    const onPressButtonHandler = () => {
        props.onPress(input);
        setInput("");
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={props.placeholder}
                style={styles.textInput}
                onChangeText={onChangeTextHandler}
                onSubmitEditing={onPressButtonHandler}
                value={input}
            />
            <View style={styles.separator}/>
            <TouchableOpacity onPress={onPressButtonHandler}>
                <Text style={styles.button}>+</Text>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        margin: 24,
        flexDirection: "row"
    },
    textInput: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 4,
        flexGrow: 1
    },
    button: {
        backgroundColor: 'gray',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 4,
        color: 'white',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
        fontSize: 16,
        fontWeight: "bold"
    },
    separator: {
        width: 8
    }
});

export default TextFieldWithButtonView;