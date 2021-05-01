import React, { useState } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { Text, View, StyleSheet ,Alert} from 'react-native'


export default function Profile({ navigation }) {

  const [oldPass, setOldPass] = useState({ value: '', error: '' })
  const [newPass, setNewPass] = useState({ value: '', error: '' })
  const [reNewPass, setReNewPass] = useState({ value: '', error: '' })



  // change password process
  const changePassword = () => {

    // #TODO  CONTROL Validations

   /* const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    }) */

    Alert.alert(
      "Success",
      "Your password has been changed successfuly",
      [
        { text: "OK", onPress: () => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Dashboard' }],
          })
      
        } }
      ]
    );
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Profile</Header>

      <View>
        <Text style={styles.text}>Username : lorem ıpsum</Text>
        <Text style={styles.text}>E-mail : example@example.com</Text>
      </View>

      <Text style = {styles.title}>Change Password</Text>

      <View style = {styles.line}></View>

      <TextInput
        label="Old Password"
        returnKeyType="next"
        value={oldPass.value}
        onChangeText={(text) => setOldPass({ value: text, error: '' })}
        error={!!oldPass.error}
        errorText={oldPass.error}
        autoCapitalize="none"
      />

      <TextInput
        label="New Password"
        returnKeyType="next"
        value={newPass.value}
        onChangeText={(text) => setNewPass({ value: text, error: '' })}
        error={!!newPass.error}
        errorText={newPass.error}
        autoCapitalize="none"
      />
      <TextInput
        label="Re New Password"
        returnKeyType="next"
        value={reNewPass.value}
        onChangeText={(text) => setReNewPass({ value: text, error: '' })}
        error={!!reNewPass.error}
        errorText={reNewPass.error}
        autoCapitalize="none"
      />


      <Button
        style={styles.button}
        labelStyle={{ color: 'white' }}
        color="#581845"
        mode="contained"
        onPress={() =>
          changePassword()
        }
      >
        Save
        </Button>


    </Background>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  title:{
    color : "blue",
    fontSize:20,
    marginTop:10,

  },
  line:{
    marginTop:5,
    marginBottom:5,
    height:1,
    width:'100%',
    backgroundColor:'blue',
    
  }

})

