import React, { useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';

import wateringImg from '../assets/watering.png';

export function Welcome (){
  
  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible(true);
  }

  return <SafeAreaView style={styles.container}>
    <Text style={styles.title}> Gerencie{'\n'}suas plantas{'\n'}de forma fácil</Text>

    {visible && 
      <Image source={wateringImg} style={styles.image} />
    }

    <Text style={styles.subtitle}>
      Não esqueça mais de regar suas plantar.
      Nós cuidados de lembrar você sempre que precisar.
    </Text>
    <Button
      title='>'
      onPress={handleVisibility}
    />

  </SafeAreaView>
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  image: {
    width: 292,
    height: 284
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
});