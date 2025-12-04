import { createStackNavigator } from "@react-navigation/stack";

import Listagem from "./Listagem";
import Detalhes from "./Detalhes";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Listagem"
        component={Listagem}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
  );
}