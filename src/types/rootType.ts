import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackPramList = {
	Home: undefined;
	User: { userId: string };
};

export type HomeScreenProps = NativeStackScreenProps<RootStackPramList, "Home">;

export type UserScreenProps = NativeStackScreenProps<RootStackPramList, "User">;
