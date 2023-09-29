import React from 'react'
import useStore from '../../store/store'
import styled from 'styled-components'

const ClearDoneButton = styled.div`
	padding: 10px;
	text-align: center;
	font-size: 0.6rem;
	cursor: pointer;
	color: #853498;

	&:hover {
		color: #993bae;
	}
`

const ClearDone = () => {
	const clearable = useStore((state) => state.clearable)

	return clearable ? (
		<ClearDoneButton onClick={() => useStore.getState().clearDone()}>
			clear Done
		</ClearDoneButton>
	) : null
}

export default ClearDone
