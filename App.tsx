import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/components/homeScreen";
import UserScreen from "./src/components/userScreen";
import { RootStackPramList } from "./src/types/rootType";

const Stack = createNativeStackNavigator<RootStackPramList>();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen
					name="User"
					component={UserScreen}
					options={({ route }) => ({ title: `ユーザー${route.params.userId}の画面` })}
				/>
			</Stack.Navigator>
			<StatusBar />
		</NavigationContainer>
	);
}
