import {
	Button,
	Center,
	HStack,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	VStack,
	useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

function SpecialRules({ rules, number }) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return rules.length > 0 ? (
		<>
			<Button onClick={onOpen}>Special Rules</Button>
			<Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset='slideInBottom'>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Mission {number}</ModalHeader>
					{/* <ModalCloseButton /> */}
					<ModalBody>
						{rules.map((r) => (
							<Stack key={r._id} alignContent={'start'}>
								<Text>{r.type}:</Text>
								<Text>{r.description}</Text>
							</Stack>
						))}
					</ModalBody>
					<ModalFooter>
						<Button colorScheme='green' mr={3} onClick={onClose}>
							ok
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	) : (
		<Center>
			<Text>No Special Rules</Text>
		</Center>
	)
}

export default SpecialRules
