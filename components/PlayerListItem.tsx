import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { myPlayersState } from '../atoms/MyTeamAtom';
import { Player } from '../types';

interface Props {
    player : Player
}

const PlayerListItem = ({player} : Props) => {
    const [myPlayer, setMyPlayer] = useRecoilState(myPlayersState);
    const onPress = () => {
        setMyPlayer((currentPlayers) => {
            if(currentPlayers.some((p) => player.id === p.id)){
                return currentPlayers.filter((p) => player.id !== p.id);
            }
            return [...currentPlayers, player];
        })
    }

    const isSelected = myPlayer.some((p) => player.id === p.id)

    return (
        <Pressable onPress={onPress} style={[styles.container , {backgroundColor : isSelected ? "#d170db" : "white"}]}>
            <Image style={styles.image}  source={{uri: `https://media.api-sports.io/football/players/${player.id}.png`}}/>
            <View style={{flexGrow: 1}}>
                <Text style={styles.name}>{player.name}</Text>
                <Text>{player.match}</Text>
            </View>
            <View style={ styles.colContainer }>
                <Text style={styles.name}>${(player.price/1000000)}m</Text>
                <Text>{player.position}</Text>
            </View>
            <Text style={styles.points}>{player.totalPoints}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        alignItems: "center",
        padding: 5,
        borderBottomWidth: 1,
        borderColor: "#eee"
    },
    colContainer: {
        marginHorizontal: 15,
        alignItems: "flex-end"
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: '#eee',
        borderWidth: 2
    },
    name: {
        fontWeight: 'bold',
    },
    points: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default PlayerListItem