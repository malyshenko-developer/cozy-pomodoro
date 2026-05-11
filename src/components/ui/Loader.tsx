import { ActivityIndicator } from "react-native"

import { COLORS } from "@/contsants"

const Loader = () => {
	return <ActivityIndicator color={COLORS.primary} size={"large"} />
}

export default Loader