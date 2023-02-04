import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Titre = (label) => {
  return (
      <Text styles={Styles.textOutput}>{label}</Text>
  )
}

export default Titre

const styles = StyleSheet.create({
    textOutput: { fontSize: 22,marginBottom : 5, color:"white", fontWeight: 'bold'}
})