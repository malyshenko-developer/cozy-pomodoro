import cn from "clsx"
import { Control, Controller } from "react-hook-form"
import { Text, TextInput, View } from "react-native"

import { IAuthFormData } from "@/types/auth"

import { validEmail } from "./email.rgx"

interface AuthFieldsProps {
	control: Control<IAuthFormData>
}

const AuthFields = ({ control }: AuthFieldsProps) => {
	return (
		<>
			<Controller
				control={control}
				name={"email"}
				rules={{
					required: "Email is required",
					pattern: {
						value: validEmail,
						message: "Your email is invalid"
					}
				}}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<>
						<View
							className={cn(
								"rounded-lg border bg-[#302A5C] my-2 px-4",
								!!error ? "border-red-400" : "border-transparent"
							)}
						>
							<TextInput
								placeholder={"Enter email"}
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
								autoCapitalize={"none"}
								className={"text-white text-lg py-3"}
								placeholderTextColor={"#666666"}
							/>
						</View>
						{error && <Text className={"text-red-400"}>{error.message}</Text>}
					</>
				)}
			/>

			<Controller
				control={control}
				name={"password"}
				rules={{
					required: "Password is required",
					minLength: {
						value: 6,
						message: "Password should be at least 6 characters"
					}
				}}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<>
						<View
							className={cn(
								"rounded-lg border bg-[#302A5C] my-2 px-4",
								!!error ? "border-red-400" : "border-transparent"
							)}
						>
							<TextInput
								placeholder={"Enter password"}
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
								autoCapitalize={"none"}
								className={"text-white text-lg py-3"}
								placeholderTextColor={"#666666"}
								secureTextEntry
							/>
						</View>
						{error && <Text className={"text-red-400"}>{error.message}</Text>}
					</>
				)}
			/>
		</>
	)
}

export default AuthFields
