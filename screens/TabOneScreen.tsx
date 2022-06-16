import BottomSheet from '@gorhom/bottom-sheet';
import React, { useEffect, useRef } from 'react';
import { BackHandler, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import Field from '../components/Field';
import Filters from '../components/Filters';
import PlayersList from '../components/PlayersList';
import TeamStats from '../components/TeamStats';

export default function TabOneScreen() {
  const snapPoints = ['1%', '50%'];
  // refs
  const playerSheetRef = useRef<BottomSheet>(null);
  const filterSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    const backAction = () => {
      filterSheetRef.current.close()
      return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress",backAction);

    return () => backHandler.remove();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <TeamStats/>

      <Field/>
      
      <Pressable onPress={() => playerSheetRef.current?.expand()} style={styles.buttonContainer}>
        <Text>{"VIEW PLAYERS"}</Text>
      </Pressable>

      <BottomSheet ref={playerSheetRef} index={0} snapPoints={snapPoints}>
        <Pressable onPress={() => filterSheetRef.current?.expand()} style={styles.buttonContainer}>
          <Text>{"FiIters"}</Text>
        </Pressable>
        {/* <View style={styles.contentContainer}> */}
        {/* <BottomSheetFlatList data={players} renderItem={({item}) => (<PlayerListItem player={item}/>)}/> */}
        <PlayersList/>
        {/* </View> */}
      </BottomSheet>

      <BottomSheet ref={filterSheetRef} index={0} snapPoints={snapPoints}>
        <Filters />
      </BottomSheet>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#72cc5e',
    // justifyContent: 'center',
  }, 
  buttonContainer: {
    backgroundColor: "orange", 
    width: "90%",
    padding: 10,
    margin: 20,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 'auto',
  },
  contentContainer: {}
});
