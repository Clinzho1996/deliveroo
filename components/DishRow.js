import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const DishRow = ({name, description, price, image, id}) => {
  return (
    <TouchableOpacity>
     <View key={id}>
        <Text className="text-lg">{name}</Text>
        <Text className="text-gray-400">{description}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default DishRow