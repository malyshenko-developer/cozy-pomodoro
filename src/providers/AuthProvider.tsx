import {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useState
} from "react"

import type { IUser } from "@/types/user"

type UserState = IUser | null

interface IContext {
	user: UserState
	setUser: Dispatch<SetStateAction<UserState>>
}

export const AuthContext = createContext<IContext | null>(null)

const AuthProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<UserState>(null)

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
