import { Foundation } from "@expo/vector-icons"
import cn from "clsx"
import { useState } from "react"
import { Pressable, Text, View } from "react-native"
import { CountdownCircleTimer } from "react-native-countdown-circle-timer"

const Timer = () => {
	const [isPlaying, setIsPlaying] = useState(false)

	const onTogglePlaying = () => {
		setIsPlaying(!isPlaying)
	}

	const onCompletePlaying = () => {
		setIsPlaying(false)
	}

	return (
		<View className={"flex-1 justify-center"}>
			<View className={"self-center"}>
				<CountdownCircleTimer
					isPlaying={isPlaying}
					duration={7}
					colors={["#3A356E", "#554FE9"]}
					colorsTime={[7, 0]}
					trailColor={"#2F304A"}
					onComplete={onCompletePlaying}
					strokeWidth={15}
					size={300}
				>
					{({ remainingTime }) => {
						const minutes = Math.floor(remainingTime / 60)
						const seconds = remainingTime % 60

						return (
							<Text
								className={"text-white text-7xl"}
							>{`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}</Text>
						)
					}}
				</CountdownCircleTimer>
			</View>

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
