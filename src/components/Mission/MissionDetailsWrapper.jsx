import { Stack } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

function MissionDetailsWrapper({ children }) {
	const controls = useAnimation()
	const [ref, inView] = useInView({
		rootMargin: '-50% 0px',
	})

	const elementRef = useRef(null)

	useEffect(() => {
		if (inView) {
			controls.start({ opacity: [0, 0.25, 1] })
			// Bring into view smoothly.
			elementRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			})
		} else {
			controls.start({ opacity: 0 })
		}
	}, [controls, inView, ref])

	function useMergedRef(...refs) {
		return (node) => {
			refs.forEach((ref) => {
				if (!ref) return

				if (typeof ref === 'function') {
					ref(node)
				} else if (ref.hasOwnProperty('current')) {
					ref.current = node
				}
			})
		}
	}
	const mergedRef = useMergedRef(ref, elementRef)

	return (
		<Stack ref={mergedRef} as={motion.div} initial={{ opacity: 1 }} animate={controls}>
			{children}
		</Stack>
	)
}

export default MissionDetailsWrapper
