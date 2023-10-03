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
import { GiFountainPen, GiTrashCan } from 'react-icons/gi'
import ElementCard from '../Miscellaneous/ElementCard'
import { parseBoldText } from '../../utilities/miscellaneous'
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

	return (
		<>
			<HStack>
				<Button colorScheme='brand.platinum' color={'black'} onClick={handleEditNavigation}>
					<GiFountainPen style={{ transform: 'rotate(90deg)' }} />
				</Button>
				<Button
					alignContent={'center'}
					onClick={onOpen}
					colorScheme='brand.platinum'
					color={'black'}>
					<GiTrashCan size={25} />
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

export default CrewNavButtons
