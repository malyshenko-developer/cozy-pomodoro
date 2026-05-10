import * as Splash from "expo-splash-screen"
import { useEffect } from "react"
import { Text, View } from "react-native"

import "@/global.css"

void Splash.preventAutoHideAsync()

export default function App() {
	useEffect(() => {
		void Splash.hideAsync()
	}, [])

	return (
		<View className="flex-1 items-center justify-center bg-[#1E1B2E]">
			<Text className="text-xl font-bold text-blue-300">
				Welcome to Cozy Pomodoro!
			</Text>
		</View>
	)
}
