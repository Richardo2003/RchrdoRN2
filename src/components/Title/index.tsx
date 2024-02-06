import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = ({text}) => {
    return (
        <View>
            <Text style={styles.title}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 50,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      marginTop: 10,
    },
});

export default Title;