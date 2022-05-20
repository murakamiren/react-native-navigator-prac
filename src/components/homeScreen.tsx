import { VFC } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreenProps } from "../types/rootType";

const HomeScreen: VFC<HomeScreenProps> = ({ navigation, route }) => {
	return (
		<SafeAreaView>
			<Text>ホーム画面</Text>
			<Button title="ユーザー" onPress={() => navigation.navigate("User", { userId: "1" })} />
		</SafeAreaView>
	);
};

export default HomeScreen;
