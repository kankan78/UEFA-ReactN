import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TeamStats = () => {
  return (
    <View style={styles.container}>
        <View style={styles.valueContainer}>
            <Text style={styles.label}>Players</Text>
            <Text style={styles.value}>0/15</Text>
        </View>
        <View style={styles.valueContainer}>
            <Text style={styles.label}>Remaining</Text>
            <Text style={styles.value}>$100</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white", 
        width: "90%",
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 4,
        borderColor: "#38abd1",
    },
    valueContainer: {
        marginRight: 25
    },
    label:{
        color: '#333'
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default TeamStats;