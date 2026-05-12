import { Foundation } from "@expo/vector-icons"
import cn from "clsx"
import { useState } from "react"
import { Pressable, Text, View } from "react-native"

const Timer = () => {
	const [isPlaying, setIsPlaying] = useState(false)

	const onTogglePlaying = () => {
		setIsPlaying(!isPlaying)
	}

	return (
		<View>
			<Text>Timer</Text>

			<Pressable
				onPress={onTogglePlaying}
				className={cn(
					"bg-primary w-20 h-20 items-center justify-center rounded-full self-center mt-10 shadow-lg shadow-primary-light",
					!isPlaying && "pl-2"
				)}
				style={{ elevation: 8 }}
			>
				<Foundation
					name={isPlaying ? "pause" : "play"}
					color={"white"}
					size={40}
				/>
			</Pressable>
		</View>
	)
}

export default Timer
