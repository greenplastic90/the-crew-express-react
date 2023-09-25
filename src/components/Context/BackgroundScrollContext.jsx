import { createContext, useContext, useState } from 'react'

const BackgroundScrollContext = createContext()

export const useBackgroundScroll = () => {
	const context = useContext(BackgroundScrollContext)
	if (!context) {
		throw new Error('useBackgroundScroll must be used within a BackgroundScrollProvider')
	}
	return context
}

export const BackgroundScrollProvider = ({ children }) => {
	const [offset, setOffset] = useState({ x: 0, y: 0 })

	const handleBackgroundScroll = (moveRight = false) => {
		const newOffset = moveRight ? offset.x + 500 : offset.x - 500
		setOffset({ x: newOffset, y: newOffset })
	}

	return (
		<BackgroundScrollContext.Provider value={{ offset, handleBackgroundScroll }}>
			{children}
		</BackgroundScrollContext.Provider>
	)
}
