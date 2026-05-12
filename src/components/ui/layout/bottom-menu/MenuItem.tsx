import { Feather } from "@expo/vector-icons"
import { Pressable } from "react-native"

import type { IMenuItem, TypeNav } from "./types"
import { COLORS } from "@/contsants"

interface MenuItemProps {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}

const MenuItem = ({ currentRoute, item, nav }: MenuItemProps) => {
	const isActive = currentRoute === item.path

	const onNavigate = () => {
		nav(item.path)
	}

	return (
		<Pressable className={"w-[24%] items-center"} onPress={onNavigate}>
			<Feather
				name={item.iconName}
				size={26}
				color={isActive ? COLORS.primary : "#8D8A97"}
			/>
		</Pressable>
	)
}

export default MenuItem
