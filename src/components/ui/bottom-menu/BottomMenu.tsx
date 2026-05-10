import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import MenuItem from "./MenuItem"
import { MENU_ITEMS } from "./constants"
import type { TypeNav } from "./types"

interface BottomMenuProps {
	nav: TypeNav
	currentRoute?: string
}

const BottomMenu = ({ nav, currentRoute }: BottomMenuProps) => {
	const { bottom } = useSafeAreaInsets()

	return (
		<View
			className={
				"pt-5 px-3 flex-row justify-between items-center w-full bg-[#1E1B2E]"
			}
			style={{
				paddingBottom: bottom + 10
			}}
		>
			{MENU_ITEMS.map(item => (
				<MenuItem
					nav={nav}
					item={item}
					currentRoute={currentRoute}
					key={item.path}
				/>
			))}
		</View>
	)
}

export default BottomMenu
