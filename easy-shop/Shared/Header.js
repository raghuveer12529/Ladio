import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";

const Header = () => {
  return (

      <View style={styles.header}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/icon.png")}
          resizeMode="contain"
        />
      </View>

  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 150,
    marginBottom: 20,
  },
});

export default Header;
