import {useState} from 'react'

export const PageWelcome = () => {
	const [message, setMessage] = useState("online")
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>Welcome to this site.</p>
	<p>Message : {message}</p>
			<button onClick={()=> setMessage(message === "online" ? "offline" : "online")}>Status</button>
		</div>
	)
}