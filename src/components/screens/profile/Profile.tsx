import Button from "@/components/ui/Button"
import Layout from "@/components/ui/layout/Layout"

import { useAuth } from "@/hooks/useAuth"

const Profile = () => {
	const { setUser } = useAuth()

	const onLogout = () => {
		setUser(null)
	}

	return (
		<Layout title={"Profile"}>
			<Button onPress={onLogout}>Logout</Button>
		</Layout>
	)
}

export default Profile
