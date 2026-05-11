import cn from "clsx"
import { PropsWithChildren } from "react"
import { Pressable, PressableProps, Text } from "react-native"

interface IButton extends PressableProps {}

const Button = ({
	children,
	className,
	...rest
}: PropsWithChildren<IButton>) => {
	return (
		<Pressable
			className={cn(
				"self-center mt-3 bg-primary py-3 px-8 rounded-full",
				className
			)}
			{...rest}
		>
			<Text className={"text-semibold text-white text-xl"}>{children}</Text>
		</Pressable>
	)
}

export default Button
