import Layout from "@/components/ui/layout/Layout"

import Timer from "./timer/Timer"

const Home = () => {
	return (
		<Layout title={"Cozy Pomodoro Timer"}>
			<Timer />
		</Layout>
	)
}

export default Home
