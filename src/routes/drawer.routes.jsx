import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import ProductDetails from "../screens/Detalhamento";
import Category from "../screens/Category";
import ShopCart from "../screens/Carrinho";
import Rehister from "../screens/Cadastro";
import Register from "../screens/Cadastro";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Inicial",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          drawerItemStyle: { display: "none" },
          drawerBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerBarLabel: "Perfil",
          drawerBarActiveTintColor: "#131313",
          drawerBarInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Category"
        component={Category}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Categorias",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="Carrinho"
        component={ShopCart}
        options={{
          drawerItemStyle: { display: "none" },
          drawerBarIcon: ({ focused }) => (
            <Feather
              name="users"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerBarLabel: "Produtos",
          drawerBarActiveTintColor: "#131313",
          drawerBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Drawer.Screen
        name="Cadastro"
        component={Register}
        options={{
          drawerBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerBarLabel: "Produtos",
          drawerBarActiveTintColor: "#131313",
          drawerBarInactiveTintColor: "#D6D6D6",
        }}
      />

    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
