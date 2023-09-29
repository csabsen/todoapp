import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 40px;
	height: 40px;
	background-color: #491963;
	color: #fff;
	border: none;
	border-radius: 50%;

	cursor: pointer;

	&:hover {
		filter: brightness(1.2);
	}

	&:active {
		filter: brightness(1.4);
	}
`
