import { Feather } from "@expo/vector-icons"

import { TypeRootStackParamList } from "@/navigation/types"

export interface IMenuItem {
	iconName: keyof typeof Feather.glyphMap
	path: keyof TypeRootStackParamList
}

export type TypeNav = (name: keyof TypeRootStackParamList) => void
