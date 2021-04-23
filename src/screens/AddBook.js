import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
export default function AddBook({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Add Book page</Header>
    </Background>
  )
}
