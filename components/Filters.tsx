import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { positionFilterState } from '../atoms/PlayersAtom';

const Filters = () => {
    const positions = ['FWD' , 'MID' , 'DEF' , 'GCK'] 
    const [ positionFilter , setPositionFilterState ] = useRecoilState(positionFilterState)

    const onPositionPress = (position: string) => {
        setPositionFilterState((currentPosFilter) => {
            if(positionFilter.includes(position)){
                return currentPosFilter.filter((pos) => pos !== position);
            }else{
                return [...currentPosFilter, position];
            }
        })
    }

    const isSelected = (position: string) => {
        return positionFilter.includes(position);
    }

    return (
        <View style={styles.container}>
            {positions.map(position => (
                <Pressable 
                    onPress={() => onPositionPress(position)}
                    style={[ 
                        styles.filterContainer, 
                        { backgroundColor : isSelected(position) ? "purple" : "#ddd" }
                    ]} 
                >
                    <Text style={styles.text}>{position}</Text>
                </Pressable>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10
    },
    filterContainer: {
        backgroundColor: '#ddd',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {}
});

export default Filters