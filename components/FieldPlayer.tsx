import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const FieldPlayer = (props: { pos: any; player: any; }) => {
    
    const {pos ,player} = props;

    return (
        <View style={{ alignItems: 'center' }}>
            <FontAwesome5 name="tshirt" size={35} color={player ? "#d170db" : "#5c5c5cbb"} />
            <Text 
                style={{
                backgroundColor:"#333333bb",
                color:'white',
                fontSize:12,
                fontWeight:'bold',
                padding:2,
                paddingHorizontal:7
                }}
            >
                {pos}
            </Text>
        </View>
    )
};

export default FieldPlayer;