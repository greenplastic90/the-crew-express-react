import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useBackgroundScroll } from '../../components/Context/BackgroundScrollContext'
import AdventuresDisplay from '../../components/Adventure/AdventuresDisplay'

function Adventures() {
	// const navigate = useNavigate()
	// const { handleBackgroundScroll } = useBackgroundScroll()

	// function handleNavigation() {
	// 	navigate('/crew/new')
	// 	handleBackgroundScroll('south', 200)
	// }
	return <AdventuresDisplay />
}

export default Adventures
