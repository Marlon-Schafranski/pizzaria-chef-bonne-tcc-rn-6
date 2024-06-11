import { Image, View, Text, ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { PRODUCTS } from "@/util/data/products";
import { formatCurrency } from "@/util/data/functions/format-currency";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "./../../components/link-button";
import { Redirect } from "expo-router";

import { useCartStore } from "@/stores/cart-stores";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Product() {
  const { id } = useLocalSearchParams();

  const product = PRODUCTS.find((item) => item.id === id);

  const cartStore = useCartStore();

  const navigation = useNavigation();

  function handleAddToCart() {
    if (product) {
      cartStore.add(product);
      navigation.goBack();
    }
  }

  if (!product) {
    return <Redirect href="/list" />;
  }

  return (
    <KeyboardAwareScrollView>
      <ScrollView>
        <View className="flex-1">
          <Image
            source={product.cover}
            className="w-full h-52"
            resizeMode="cover"
          />

          <View className="p-5 mt-8 flex-1">
            <Text className="text-slate-900 text-xl font-heading pb-2">
              {product.title}
            </Text>

            <Text className="text-green-700 font-body text-base leading-6 mt-2 mb-2">
              {product.information}
            </Text>

            <Text className="text-orange-400 text-xl font-heading my-2">
              {formatCurrency(product.price)}
            </Text>

            <Text className="text-slate-700 font-body text-base leading-6 mb-5">
              {product.description}
            </Text>

            {product.ingredients.map((ingredient) => (
              <Text
                key={ingredient}
                className="text-slate-600 font-body text-base leading-6"
              >
                {"\u2022"} {ingredient}
              </Text>
            ))}
          </View>

          <View className="p-5 pb-5 gap-5">
            <Button onPress={handleAddToCart}>
              <Button.Icon>
                <Feather name="plus-circle" size={20} />
              </Button.Icon>

              <Button.Text>Adicionar ao pedido</Button.Text>
            </Button>

            <LinkButton title="Voltar ao cardápio" href="/list" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}
