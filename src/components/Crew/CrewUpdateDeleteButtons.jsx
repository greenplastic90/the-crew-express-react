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
import { deleteCrewById } from '../../utilities/crew-api'
import { useNavigation } from '../Context/NavigationContext'
import { MdDeleteForever, MdEditSquare } from 'react-icons/md'
import ElementCard from '../Miscellaneous/ElementCard'
import { parseBoldText } from '../../utilities/miscellaneous'

function CrewUpdateDeleteButtons({ crew, setCrews }) {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const { handleNavigation } = useNavigation()

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
		handleNavigation(`/crews/${_id}/edit`, 'south')
	}

	return (
		<>
			<HStack>
				<Button colorScheme='brand.platinum' color={'black'} onClick={handleEditNavigation}>
					<MdEditSquare size={20} />
				</Button>
				<Button
					alignContent={'center'}
					onClick={onOpen}
					colorScheme='brand.platinum'
					color={'black'}>
					<MdDeleteForever size={24} />
				</Button>
			</HStack>

			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ElementCard>
						<ModalHeader>{`Delete ${name}?`}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Text>{parseBoldText('This action can [b]NOT[/b] be undone')}</Text>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme='brand.platinum' color={'black'} mr={3} onClick={onClose}>
								Cancel
							</Button>
							<Button colorScheme='brand.brown' onClick={() => deleteCrew()}>
								Delete
							</Button>
						</ModalFooter>
					</ElementCard>
				</ModalContent>
			</Modal>
		</>
	)
}

export default CrewUpdateDeleteButtons
