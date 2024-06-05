import { Image, Text, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./styles";
import Title from "../../components/Title";
import { ScrollView } from "react-native-gesture-handler";

export default function ProductDetails({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // const apiURL = `http://10.88.200.157:4000/products/${id}`;
  const apiURL = `http://10.88.194.76:4000/products/${id}`;

  const fetchProduct = async () => {
    try {
      const response = await axios.get(apiURL);
      setProduct(response.data.product);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setProduct(null);
    setLoading(true);
    fetchProduct();
  }, [id]);

  return (
    <ScrollView>
    <View style={styles.container}>
     <Image style={styles.circuloAzul} source={require('../../../assets/Circulo_azul_detalhes.png')}></Image>

      {product ? (
        
        <View style={styles.Containerproduct}>
          <View key={product.id} style={styles.product}>
          <Image style={styles.logo} source={{ uri: product.photo }} />
            <Title title={product.name} />
            <Title title={product.description}/>
            <Text style={styles.preco}>R${product.price}</Text>
          </View>
        </View>
      ) : (
        <Text style={styles.loading}>Carregando...</Text>
      )}
    </View>
    </ScrollView>
  );
}