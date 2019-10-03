import React from 'react';
import { StyleSheet, FlatList, View } from "react-native";

const ListView = props => {

    const normalize = (data) => data.map((item, index) => ({ key: index, value: item }));
    const renderItem = (data) => props.view(data.item);

    return (
        <View style={styles.container}>
            <FlatList
                data={normalize(props.data)}
                renderItem={renderItem}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 200
    }
});

export default ListView;