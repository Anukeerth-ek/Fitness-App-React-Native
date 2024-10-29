import { View, Text, Image } from "react-native";
import React from "react";
import { sliderImage } from "../constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
export default function ImageSlider() {
     return (
          <View className='flex-row justify-between gap-2'>
               {sliderImage.map((item, index) => (
                    <View key={index} className=" items-center">
                         <Image
                              source={item}
                              className=" w-64 h-40 rounded-[20px]" resizeMode="cover"
                         />
                    </View>
               ))}
          </View>
     );
}
