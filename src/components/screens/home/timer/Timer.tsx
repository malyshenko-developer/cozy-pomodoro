import { Foundation } from "@expo/vector-icons"
import cn from "clsx"
import { useEffect, useState } from "react"
import { Pressable, Text, View } from "react-native"
import { CountdownCircleTimer } from "react-native-countdown-circle-timer"

import { Status } from "./timer.interface"

const FLOW_DURATION = 5
const sessionCount = 5
const breakDuration = 60

const Timer = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [status, setStatus] = useState<Status | null>(null)
	const [currentSession, setCurrentSession] = useState<number>(1)
	const [flowDuration, setFlowDuration] = useState(FLOW_DURATION)

	useEffect(() => {
		if (isPlaying) {
			setStatus(Status.WORK)
		}
	}, [isPlaying])

	const onTogglePlaying = () => {
		setIsPlaying(!isPlaying)
	}

	const onCompletePlaying = () => {
		setIsPlaying(false)
		setCurrentSession(prev => prev + 1)
		setFlowDuration(FLOW_DURATION)
		setStatus(Status.REST)

		return { shouldRepeat: true }
	}

	return (
		<View className={"flex-1 justify-center"}>
			<View className={"self-center"}>
				<CountdownCircleTimer
					key={currentSession}
					isPlaying={isPlaying}
					duration={flowDuration}
					colors={["#3A356E", "#554FE9"]}
					colorsTime={[flowDuration, 0]}
					trailColor={"#2F304A"}
					onComplete={onCompletePlaying}
					strokeWidth={15}
					size={300}
				>
					{({ remainingTime }) => {
						const minutes = Math.floor(remainingTime / 60)
						const seconds = remainingTime % 60

						return (
							<>
								<Text className={"text-center text-3xl text-primary mb-2"}>
									{status === Status.WORK ? "WORK" : "REST"}
								</Text>
								<Text
									className={"text-white text-7xl"}
								>{`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}</Text>
							</>
						)
					}}
				</CountdownCircleTimer>

				<View className={"flex-row items-center mt-14 justify-center"}>
					{[...Array(sessionCount)].map((_, index) => {
						const isCompleted = index + 1 < currentSession
						const isActive = index + 1 === currentSession

						const pointClass = cn(
							"rounded-full border-4",
							isActive && "w-7 h-7 bg-transparent border-primary",
							isCompleted && "w-5 h-5 bg-primary opacity-50 border-transparent",
							!isActive &&
								!isCompleted &&
								"w-5 h-5 bg-[#2F2B3F] border-transparent"
						)

						const lineClass = cn("w-7 h-0.5", {
							"bg-primary opacity-50": index + 1 < currentSession,
							"bg-[#2F2B3F]":
								index + 1 >= currentSession && index + 1 < sessionCount
						})

						return (
							<View className="flex-row items-center" key={`point ${index}`}>
								<View className={pointClass} />
								{index + 1 !== sessionCount && <View className={lineClass} />}
							</View>
						)
					})}
				</View>
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
