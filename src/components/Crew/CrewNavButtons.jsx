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

function CrewNavButtons({ crew, setCrews }) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const navigate = useNavigate()

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
	return (
		<>
			<HStack>
				<Button onClick={() => navigate(`/crew/${_id}`)}>Missions</Button>
				<Button onClick={() => navigate(`/crew/${_id}/edit`)}>Edit</Button>
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
