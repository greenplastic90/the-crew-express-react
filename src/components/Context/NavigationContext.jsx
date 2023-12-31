import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavigationContext = createContext()

export const useNavigation = () => {
	const context = useContext(NavigationContext)
	if (!context) {
		throw new Error('useNavigation must be used within a BackgroundScrollProvider')
	}
	return context
}

export const BackgroundScrollProvider = ({ children }) => {
	const [offset, setOffset] = useState({ x: 0, y: 0 })
	const [canAnimateBg, setCanAnimateBG] = useState(true)
	const navigate = useNavigate()

	const handleNavigation = (path, scrollDirection, state) => {
		navigate(path, { state: state })
		handleBackgroundScroll(scrollDirection)
	}

	const handleAnimateToggle = () => {
		setCanAnimateBG(!canAnimateBg)
	}

	const handleBackgroundScroll = (direction, distance = 100) => {
		if (!canAnimateBg) return
		let newXOffset = offset.x
		let newYOffset = offset.y

		switch (direction.toLowerCase()) {
			case 'north':
				newYOffset += distance
				break
			case 'south':
				newYOffset -= distance
				break
			case 'west':
				newXOffset += distance
				break
			case 'east':
				newXOffset -= distance
				break
			case 'north-west':
				newYOffset += distance
				newXOffset += distance
				break
			case 'north-east':
				newYOffset += distance
				newXOffset -= distance
				break
			case 'south-west':
				newYOffset -= distance
				newXOffset += distance
				break
			case 'south-east':
				newYOffset -= distance
				newXOffset -= distance
				break
			default:
				console.warn(`Invalid direction: ${direction}`)
		}

		setOffset({ x: newXOffset, y: newYOffset })
	}

	return (
		<NavigationContext.Provider
			value={{ offset, handleNavigation, handleAnimateToggle, canAnimateBg }}>
			{children}
		</NavigationContext.Provider>
	)
}
