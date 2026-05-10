import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Auth } from "@/components/screens"

import { useAuth } from "@/hooks/useAuth"

import { routes } from "./routes"
import { TypeRootStackParamList } from "./types"

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigation = () => {
	const { user } = useAuth()

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: "#1E1B2E"
				}
			}}
		>
			{user ? (
				routes.map(route => <Stack.Screen key={route.name} {...route} />)
			) : (
				<Stack.Screen name={"Auth"} component={Auth} />
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigation
