import { View, Image, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather, Ionicons } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Link } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { useCartStore } from "@/stores/cart-stores";


type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
};

export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
  const cartStore = useCartStore();

  const handleLogout = () => {
    
    cartStore.clear();
  
  };

  return (
    <View className="flex-row items-center ">
      <View className="flex-1  p-1">
        <Image
          source={require("@/assets/Logo.png")}
          className="h-24 w-20 "
          resizeMode="contain"
        />
       
        <Text className="text-slate-900 text-xl font-heading mt-1">
          {title}
        </Text>
      
      
      </View>
    
      <View className="flex-col gap-4" >
        <Link href="/" asChild>
        <TouchableOpacity onPress={handleLogout}>
          <FontAwesome name="sign-out" size={24} color="black" />
        </TouchableOpacity>
        </Link>
        {cartQuantityItems > 0 && (
          <Link href="/cart" asChild>
            <TouchableOpacity className="reative" activeOpacity={0.7}>
              <View className="bg-orange-500 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
                <Text className="text-gray-200 font-bold text-xs">{cartQuantityItems}</Text>
              </View>
              <Feather name="shopping-bag" color={colors.black} size={24} />
              
            </TouchableOpacity>
          </Link>    
        )}
            


      </View>

    </View>

    
  );
}
