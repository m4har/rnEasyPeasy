import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { useStoreActions } from 'easy-peasy'

const From = ({ navigation }) => {
  const [daerah, setDaerah] = useState('')
  const onChangeFrom = useStoreActions(actions => actions.user.changeFrom)
  const actionButton = () => {
    onChangeFrom(daerah)
    return navigation.navigate('Gender')
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3498db', padding: 10 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Kamu dari daerah mana ?</Text>
      <TextInput onChangeText={text => setDaerah(text)} placeholder='Daerah' style={{ width: '100%', borderWidth: 1, height: 50, textAlign: 'center', borderRadius: 10, backgroundColor: '#fff', margin: 20, fontWeight: 'bold', fontSize: 15 }} />
      <Button title='Lanjut' onPress={actionButton} />
    </View>
  )
}

export default From
