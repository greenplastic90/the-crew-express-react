import {
	Button,
	HStack,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteCrewById } from '../../utilities/crew-api'

function Crew({ crew, setCrews }) {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const { _id, name, memberNames } = crew

	const navigate = useNavigate()

	async function deleteCrew(id) {
		try {
			const res = await deleteCrewById(id)
			const { message } = await res.json()

			if (message) {
				onClose()
				setCrews((crews) => {
					return crews.filter((c) => c._id !== id)
				})
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Stack border={'1px'}>
			<Heading as={'h2'} size={'lg'}>
				{name}
			</Heading>
			<HStack>
				{memberNames.map((member, i) => (
					<Text key={i}>{member}</Text>
				))}
			</HStack>
			<HStack>
				<Button onClick={() => navigate(`/crew/${_id}`)}>Details</Button>
				<Button onClick={onOpen}>Delete</Button>
			</HStack>

			<Modal isOpen={isOpen} onClose={onClose}>
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
						<Button colorScheme='red' onClick={() => deleteCrew(_id)}>
							Delete
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Stack>
	)
}

export default Crew
