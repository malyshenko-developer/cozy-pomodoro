import { Auth, Home, Profile, Settings } from "@/components/screens"

import { IRoute } from "./types"

export const routes: IRoute[] = [
	{
		name: "Auth",
		component: Auth
	},
	{
		name: "Home",
		component: Home
	},
	{
		name: "Settings",
		component: Settings
	},
	{
		name: "Profile",
		component: Profile
	}
]
