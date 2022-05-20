import { VFC } from "react";
import { Button, Text, View } from "react-native";
import { HomeScreenProps } from "../types/rootType";

const HomeScreen: VFC<HomeScreenProps> = ({ navigation, route }) => {
	return (
		<View>
			<Text>ホーム画面</Text>
			<Button title="ユーザー" onPress={() => navigation.navigate("User", { userId: "1" })} />
		</View>
	);
};

export default HomeScreen;
