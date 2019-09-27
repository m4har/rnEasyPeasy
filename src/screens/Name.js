import React, { useState } from 'react'
import { View, Text, Button, TextInput, FlatList } from 'react-native'
import { useStoreActions } from 'easy-peasy'
const Name = ({ navigation }) => {
  const [nama, setNama] = useState('')
  const onChangeName = useStoreActions(actions => actions.user.changeName)
  const onPress = () => {
    onChangeName(nama)
    navigation.navigate('FromHome')
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1c40f', padding: 10 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Haii.., nama kamu siapa ?</Text>
      <TextInput placeholder='Nama' onChangeText={text => setNama(text)} style={{ width: '100%', borderWidth: 1, height: 50, textAlign: 'center', borderRadius: 10, backgroundColor: '#fff', margin: 20, fontWeight: 'bold', fontSize: 15 }} />
      <Button title='Lanjut' onPress={onPress} />
    </View>
  )
}

export default Name
