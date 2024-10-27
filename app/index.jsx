import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";
export default function Index() {
     const router = useRouter();
     return (
          <View className="flex-1 flex justify-end">
               {/* <StatusBar style="light" /> */}
               <Image className="h-full w-full absolute" source={require("../assets/images/welcome.png")} />

               <LinearGradient
                    colors={["transparent", "#18181b"]}
                    style={{ width: wp(100), height: hp(70) }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 0.8 }}
                    className="flex justify-end pb-12 space-y-8"
               >
                    <Animated.View entering={FadeInDown.delay(150).springify()} className="flex items-center">
                         <Text className="text-white translate-y-3 mx-4 text-sm">
                              By clicking 'Get Started', you confirm your agreement to the privacy and security settings.
                         </Text>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(150).springify()}>
                         <TouchableOpacity
                              onPress={() => router.push("/home")}
                              className="bg-rose-500 mx-auto flex items-center justify-center  rounded-full border-neutral-200"
                              style={{ height: hp(7), width: wp(80) }}
                         >
                              <Text className="text-white " style={{ fontSize: hp(3) }}>
                                   Get Started
                              </Text>
                         </TouchableOpacity>
                    </Animated.View>
               </LinearGradient>
          </View>
     );
}
