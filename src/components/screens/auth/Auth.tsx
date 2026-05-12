import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import {
	Keyboard,
	Pressable,
	Text,
	TouchableWithoutFeedback,
	View
} from "react-native"

import AuthFields from "@/components/screens/auth/AuthFields"
import Button from "@/components/ui/Button"
import Loader from "@/components/ui/Loader"

import { useAuth } from "@/hooks/useAuth"

import { IAuthFormData } from "@/types/auth"

const Auth = () => {
	const [isReg, setIsReg] = useState<boolean>(false)
	const { setUser } = useAuth()

	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: "onBlur",
		reValidateMode: "onChange"
	})

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		setUser({
			_id: "123",
			...data
		})
		reset({}, { keepErrors: false })
	}

	const onChangeMode = () => {
		setIsReg(!isReg)
	}

	const isLoading = false

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View className="items-center justify-center flex-1">
				<View className={"w-3/4"}>
					<Text
						className={
							"text-white text-5xl font-bold text-center leading-[1.2] mb-5"
						}
					>
						{isReg ? "Sign up" : "Sign in"}
					</Text>

					<AuthFields control={control} />

					{isLoading ? (
						<Loader />
					) : (
						<>
							<Button onPress={handleSubmit(onSubmit)}>Let's go</Button>

							<Pressable onPress={onChangeMode} className="mt-4 items-center">
								<Text className="text-white/60 text-base">
									{isReg
										? "Already have an account? Sign in"
										: "Don't have an account? Sign up"}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Auth
