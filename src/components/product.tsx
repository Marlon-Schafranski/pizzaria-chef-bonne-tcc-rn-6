import React, { forwardRef, useState } from "react";
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  Modal,
  Button,
  TouchableOpacityProps,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { MENU } from "@/util/data/products";

type ProductDataProps = {
  id: string;
  title: string;
  description: string;
  cover: any;
  information: string;
  quantity?: number;
};

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps;
};

export const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ data,  ...rest }, ref) => {
    return (
      <TouchableOpacity>
        <TouchableOpacity
          ref={ref}
          className="w-full flex-row items-center pb-4"
          activeOpacity={0.7}
          {...rest}
        >
          <Image source={data.cover} className="w-20 h-20  rounded-md " />

          <View className="flex-1 ml-3">
            <View className="flex-row items-center">
              <Text className="text-slate-800 font-subtitle text-base flex-1">
                {data.title}
              </Text>

              {data.quantity && (
                <Text className="text-slate-600 font-subtitle text-sm">
                  x {data.quantity}
                </Text>
              )}
            </View>

            <Text className="text-slate-600   text-xs leading-5 mt-2">
              {data.description}
            </Text>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
);
