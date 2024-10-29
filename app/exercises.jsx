import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodypart } from "../api/exerciseDB";
import { demoExercises } from "../constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import IonIcons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "react-native";
import ExerciseList from "../components/ExerciseList";

export default function exercises() {
     const router = useRouter();
     const item = useLocalSearchParams();
     const [exercises, setExercises] = useState(demoExercises);

     useEffect(() => {
          // if (item && item.name) {
          //   getExercises(item.name)
          // }
     }, [item]);

     const getExercises = async (bodyPart) => {
          let apiData = await fetchExercisesByBodypart(bodyPart);
          setExercises(apiData);
     };

     return (
          <ScrollView>
               <StatusBar style="light" />
               <Image source={item.image} style={{ width: wp(100), height: hp(45) }} className="rounded-b-[40px]" />
               <TouchableOpacity
                    className="bg-rose-500 mx-4 flex justify-center items-center absolute rounded-full pr-1"
                    style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(5) }}
                    onPress={()=> router.back()}
               >
                    <IonIcons name="caret-back-outline" size={hp(3)} color="white" />
               </TouchableOpacity>

               {/* exercises */}
               <View className="mx-4 space-y-3 mt-4">
                <Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-700">
                    {item.name} Exercises
                </Text>
                {/* exercise list */}
                <View >
                  <ExerciseList data={exercises}/>
                </View>
               </View>
          </ScrollView>
     );
}
