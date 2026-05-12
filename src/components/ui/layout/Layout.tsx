import { PropsWithChildren } from "react"
import { Text, View } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"

interface LayoutProps {
	title?: string
}

const Layout = ({ title, children }: PropsWithChildren<LayoutProps>) => {
	const { top } = useSafeAreaInsets()

	return (
		<SafeAreaView className={"flex-1"}>
			<View
				className={"flex-1 px-6"}
				style={{
					paddingTop: top / 5
				}}
			>
				{title && (
					<Text className={"text-3xl text-white font-semibold text-center"}>
						{title}
					</Text>
				)}
				<View className={"flex-1"}>{children}</View>
			</View>
		</SafeAreaView>
	)
}

export default Layout
