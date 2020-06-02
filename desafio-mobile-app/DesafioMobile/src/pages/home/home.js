import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'

import Styles from './styles'

export default function Home() {
  return(
    <ImageBackground source={require('./img/degrade-laranja.jpg')} style={Styles.backgroundImage}>
      <View style={Styles.containerPresentation}>
      <Image source={require('./img/logo.png')} style={Styles.logoIcon} />
      </View>
      <View style={Styles.containerButton}>
        <TouchableOpacity style={Styles.touch}>
          <Image source={require('./img/data-icon.png')} style={Styles.dataIcon} />
          <Text style={Styles.buttonText}> Dados </Text>
          <Image source={require('./img/arrow-icon.png')} style={Styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.touch, Styles.touchAbout]}>
          <Image source={require('./img/about-icon.png')} style={Styles.aboutIcon} />
          <Text style={Styles.buttonText}> Sobre </Text>
          <Image source={require('./img/arrow-icon.png')} style={Styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
