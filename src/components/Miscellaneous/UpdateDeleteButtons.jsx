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
import { useNavigation } from '../Context/NavigationContext'
import { MdDeleteForever, MdEditSquare } from 'react-icons/md'
import ElementCard from './ElementCard'
import { parseBoldText } from '../../utilities/miscellaneous'

function UpdateDeleteButtons({ name, updateFormPath, deleteFunc, showEdit = true }) {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const { handleNavigation } = useNavigation()

	async function deleteDocument() {
		await deleteFunc()
		onClose()
	}

	return (
		<>
			<HStack>
				{showEdit && (
					<Button variant={'default'} onClick={() => handleNavigation(updateFormPath, 'south')}>
						<MdEditSquare size={20} />
					</Button>
				)}
				<Button variant={'default'} alignContent={'center'} onClick={onOpen}>
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
							<Button variant={'default'} mr={3} onClick={onClose}>
								Cancel
							</Button>
							<Button variant={'negative'} onClick={deleteDocument}>
								Delete
							</Button>
						</ModalFooter>
					</ElementCard>
				</ModalContent>
			</Modal>
		</>
	)
}

export default UpdateDeleteButtons
