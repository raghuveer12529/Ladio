import {
  View,
  Text,
  Dimensions,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import React from "react";

var { width } = Dimensions.get("window");
// console.log(width / 2)

const ProductCard = (props) => {
  const { name, price, image, countInStock } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode='contain' source={{ uri : image ? image : 'https://picsum.photos/200'}} />
      {/* <View style={styles.card} /> */}
      <View>
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + "..." : name}
      </Text>
        <Text style={styles.price}>${price}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 15,
    height: 600,
    padding: 10,
    borderRadius: 30,
    marginTop: 55,
    marginBottom: 55,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white",
  },
  image: {
    margin : 15,
    width: width - 50,
    height: 500,
    backgroundColor: "transparent",
    position: "conatin",
    top: -60,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    color: "orange",
    marginTop: 10,
  },
});

export default ProductCard;
