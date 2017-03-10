import React from 'react';
import { View, Image, Text } from 'react-native';

export default ({ flickrItem }) => {

    return (
        <View style={{ flexDirection: 'column', padding: 8, borderWidth: 2, borderColor: 'black', margin: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{flickrItem.title}</Text>
                <Text>{flickrItem.date}</Text>
            </View>
            <Image source={{
                    uri: flickrItem.url
                }}
               style={{
                   marginTop: 16,
                   width: 200,
                   height: 200
               }}/>
        </View>);
}