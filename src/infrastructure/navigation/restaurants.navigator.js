import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
import { Text } from "react-native";

const RestaurantStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  gestureEnabled: true,
  ...TransitionPresets.ModalSlideFromBottomIOS,
};

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={screenOptions}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
