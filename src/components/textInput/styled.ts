import styled from 'styled-components'

export const Input = styled.input.attrs({ type: 'text' })`
	width: 100%;
	padding: 10px;
	border: none;
	border-radius: 10px;

	&:focus {
		outline: #e964f8 solid 2px;
	}
`
