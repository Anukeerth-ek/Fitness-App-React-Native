import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodypart } from '../api/exerciseDB'

export default function exercises() {
    const router = useRouter()
    const item = useLocalSearchParams()
    
    useEffect(()=> {
            if (item && item.name) {
              getExercises(item.name)
            }
    }, [item])

    const getExercises = async(bodyPart)=> {

        let apiData = await fetchExercisesByBodypart(bodyPart)
        console.log("from exercide", apiData)

    }

  return (
    <View>
      <Text>exercises</Text>
      <TouchableOpacity onPress={()=> router.back()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}