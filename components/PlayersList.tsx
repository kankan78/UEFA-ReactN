import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import React from 'react'
import { useRecoilState } from 'recoil'
import { filteredPlayers } from '../atoms/PlayersAtom'
import PlayerListItem from './PlayerListItem'

function PlayersList() {
    const [ players ] = useRecoilState(filteredPlayers);
    return (
        <BottomSheetFlatList data={players} renderItem={({item}) => (<PlayerListItem player={item}/>)}/>
    )
}

export default PlayersList;