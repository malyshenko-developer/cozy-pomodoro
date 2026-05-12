import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import * as Splash from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"

import AuthProvider from "@/providers/AuthProvider"

import "./global.css"
import Navigation from "@/navigation/Navigation"

void Splash.preventAutoHideAsync()

const queryClient = new QueryClient()

export default function App() {
	useEffect(() => {
		void Splash.hideAsync()
	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</AuthProvider>
			<StatusBar style={"light"} />
		</QueryClientProvider>
	)
}
