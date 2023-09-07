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
import { formatDate } from '../../utilities/miscellaneous'
import CrewNavButtons from './CrewNavButtons'

function CrewDetails({ crew, setCrews }) {
	const { _id, name, memberNames, startDate, finishDate } = crew

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
				<Text>Start: {formatDate(startDate)}</Text>
				<Text>Finish: {finishDate ? formatDate(finishDate) : 'Not Completed'}</Text>
			</HStack>
			<Text>Attemps: ???</Text>
			<CrewNavButtons crew={crew} setCrews={setCrews} />
		</Stack>
	)
}

export default CrewDetails
