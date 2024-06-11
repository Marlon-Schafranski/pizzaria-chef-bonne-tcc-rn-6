import React, { useState, useRef } from "react";
import { View, FlatList, Text, SectionList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CATEGORIES, MENU, ProductProps } from "@/util/data/products";
import { CategoryButton } from "../components/category-button";
import { Product } from "@/components/product";
import { useCartStore } from "@/stores/cart-stores";
import { Header } from "@/components/header";
import { Link } from "expo-router";

export default function List() {
  const cartStore = useCartStore();
  const [category, setCategory] = useState(CATEGORIES[0]);
  const SectionListRef = useRef<SectionList<ProductProps>>(null);
  const cartQuantityItems = cartStore.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const navigation = useNavigation(); 


  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);
    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === selectedCategory
    );

    if (SectionListRef.current) {
      SectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      });
    }
  }

  function handleProductPress(productId: string) {
    navigation.navigate("DetalhesProduto", { productId }); 
  }

  return (
    <View className="flex-1 pt-8 gap-2">
      <View className="border-b border-gray-200 pb-5 mx-5 p-5">
        <Header title="Faça seu pedido" cartQuantityItems={cartQuantityItems} />
      </View>
      <View className="Flex flex-col items-start gap-1">
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CategoryButton
              title={item}
              isSelected={item === category}
              onPress={() => handleCategorySelect(item)}
            />
          )}
          horizontal
          className=" mt-5 max-h-10"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        />
      </View>

      <SectionList
        ref={SectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
          <Product
            data={item}
          />
        </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-slate-900 font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}
