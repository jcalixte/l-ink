import React from 'react'
import { Box, Text } from 'ink'

type Props = {
	name: string | undefined
}

export default function App({ name = 'Stranger' }: Props) {
	return (
		<Box borderStyle="double">
			<Text>
				Bonjour, <Text color="green">{name}</Text>
			</Text>
		</Box>
	)
}
