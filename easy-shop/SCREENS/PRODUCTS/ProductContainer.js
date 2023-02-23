import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from "react-native";
import { ProductList } from "./ProductList";
const data = require("../../assets/data/products.json");
var { width } = Dimensions.get("window");
import { Searchbar } from "react-native-paper";

export const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    
    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus(false);
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <View style={{ width: width, backgroundColor: "gainsboro" }}>
      <View
        style={{
          width: width - 10,
          backgroundColor: "transparent",
          marginTop: 10,
          justifyContent: "center",
          marginLeft: 5,
        }}
      >
        <Searchbar placeholder="Search" />
      </View>
      <View style={{ alignItems: "center" }}>
        <FlatList
          numColumns={1}
          data={products}
          renderItem={({ item }) => <ProductList key={item.id} item={item} />}
          keyExtractor={(item) => item.price}
        />
      </View>
    </View>
  );
};
