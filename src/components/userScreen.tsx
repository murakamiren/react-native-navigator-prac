import { VFC } from "react";
import { Button, Text, View } from "react-native";
import { UserScreenProps } from "../types/rootType";

// type UserScreenProps = NativeStackNavigationProp<RootStackPramList, "User">

const UserScreen: VFC<UserScreenProps> = ({ navigation, route }) => {
	return (
		<View>
			<Text>ユーザー画面</Text>
			<Text>userId: {route.params.userId}</Text>
			<Button title="ホーム" onPress={() => navigation.navigate("Home")} />
		</View>
	);
};

export default UserScreen;
