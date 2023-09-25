import {
	Button,
	HStack,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteCrewById } from '../../utilities/crew-api'
import { useBackgroundScroll } from '../Context/BackgroundScrollContext'

function CrewNavButtons({ crew, setCrews }) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const navigate = useNavigate()
	const { handleBackgroundScroll } = useBackgroundScroll()

	const { _id, name } = crew

	async function deleteCrew() {
		try {
			const res = await deleteCrewById(_id)
			const { message } = await res.json()

			if (message) {
				onClose()
				setCrews((crews) => {
					return crews.filter((c) => c._id !== _id)
				})
			}
		} catch (error) {
			console.log(error)
		}
	}
	function handleEditNavigation() {
		navigate(`/crew/${_id}/edit`)
		handleBackgroundScroll('south')
	}

	function handleMissionNavigation() {
		navigate(`/crew/${_id}`)
		handleBackgroundScroll('east')
	}
	return (
		<>
			<HStack>
				<Button onClick={handleMissionNavigation}>Missions</Button>
				<Button onClick={handleEditNavigation}>Edit</Button>
				<Button onClick={onOpen}>Delete</Button>
			</HStack>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{`Delete ${name}`}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>This action can NOT be undone</Text>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='gray' mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='red' onClick={() => deleteCrew()}>
							Delete
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default CrewNavButtons
