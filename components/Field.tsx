import React from 'react';
import { ImageBackground, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { myPlayersPosition } from '../atoms/MyTeamAtom';
import field from './../assets/images/field.jpg';
import FieldPlayer from './FieldPlayer';

const Field = () => {
    const [players] = useRecoilState(myPlayersPosition);
    /*const players : {[key : string] : null[]} = {
        "FWD" : [null,null,null],
        "MID" : [null,null,null],
        "DEF" : [null,null,null,null],
        "GK"  : [null],
    }*/
  
    return(
        <ImageBackground source={field} resizeMode="contain" style={{width:"100%", aspectRatio: 2/3, justifyContent:"space-around" }}>
            {
                Object.keys(players).map((pos) => (
                    <View style={{flexDirection : 'row' , justifyContent:"space-around", width: "100%"}}>
                    {players[pos].map((player)=>(
                        <FieldPlayer pos = {pos} player = {player}/>
                    ))}
                    </View>
                ))
            }
        </ImageBackground>
    )
};

export default Field;