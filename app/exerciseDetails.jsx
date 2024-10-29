import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function exerciseDetails() {
     const item = useLocalSearchParams();
     const router = useRouter();

     return (
          <SafeAreaView className="flex flex-1">
               {/* <TouchableOpacity
                    className="bg-rose-500 mx-4 flex justify-center items-center absolute rounded-full pr-1"
                    style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(5) }}
                    onPress={()=> router.back()}
               >
                    <Ionicons name="caret-back-outline" size={hp(3)} color="white" />
               </TouchableOpacity> */}
               <View>
                    <Image
                         source={{ uri: item.gifUrl }}
                         contentFit="cover"
                         style={{ width: wp(100), height: wp(100) }}
                         className="rounded-b-[40px]"
                    />
                    <TouchableOpacity onPress={() => router.back()} className="absolute mx-2 rounded-full mt-2 right-0">
                         <Ionicons name="close-circle" size={hp(4.5)} color="#f43f5e" />
                    </TouchableOpacity>
               </View>
               <ScrollView
                    className="mx-4 space-y-2 mt-3"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 30 }}
               >
                    <Animated.Text
                         entering={FadeInDown.duration(100).springify()}
                         style={{ fontSize: hp(3.5) }}
                         className="font-semibold text-neutral-800 tracking-wide"
                    >
                         {item.name}
                    </Animated.Text>
                    <Animated.Text
                         entering={FadeInDown.delay(200).duration(500).springify()}
                         style={{ fontSize: hp(2) }}
                         className=" text-neutral-800 tracking-wide"
                    >
                         Equipments: <Text className="font-bold text-neutral-700">{item?.equipment}</Text>
                    </Animated.Text>
                    <Animated.Text
                         entering={FadeInDown.delay(300).duration(500).springify()}
                         style={{ fontSize: hp(2) }}
                         className=" text-neutral-700 tracking-wide"
                    >
                         Secondary Muscle: <Text className="font-bold text-neutral-700">{item?.secondaryMuscles}</Text>
                    </Animated.Text>
                    <Animated.Text
                         entering={FadeInDown.delay(400).duration(500).springify()}
                         style={{ fontSize: hp(2) }}
                         className=" text-neutral-700 tracking-wide"
                    >
                         Target Muscle: <Text className="font-bold text-neutral-700">{item?.target}</Text>
                    </Animated.Text>
                    <Animated.Text
                         entering={FadeInDown.delay(500).duration(500).springify()}
                         style={{ fontSize: hp(3) }}
                         className="font-semibold text-neutral-800 tracking-wide"
                    >
                         Instructions:
                    </Animated.Text>
                    {item.instructions.split(",").map((instruction, index) => (
                         <Animated.Text
                              entering={FadeInDown.delay(index * 100 + 600)
                                   .duration(500)
                                   .springify()}
                              key={index}
                              style={{ fontSize: hp(1.7) }}
                              className="text-neutral-800"
                         >
                              {instruction}
                         </Animated.Text>
                    ))}
               </ScrollView>
          </SafeAreaView>
     );
}
