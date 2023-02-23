import React from 'react';
import { View , TouchableOpacity , Dimensions} from 'react-native';
import ProductCard from './ProductCard';

// import { Container } from './styles';
var { width } = Dimensions.get("window");

export const ProductList = (props) => {
    const { item } = props;
    return (
        <TouchableOpacity>
            <View style={{  backgroundColor: 'gainsboro'}}>
                <ProductCard {...item}  />
            </View>
      </TouchableOpacity>
  );
}
