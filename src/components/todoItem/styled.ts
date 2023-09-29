import styled from 'styled-components'

export const Container = styled.div<{ isDone: boolean }>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
	width: 100%;
	border-radius: 10px;
	margin-bottom: 10px;
	background-color: ${(props) => (props.isDone ? '#1a0a1e;' : '#35143d;')};

	& > li {
		padding: 10px;
		width: 100%;
		color: #fff;
		text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
	}

	&:hover {
		background-color: ${(props) => (props.isDone ? '#200d25;' : '#561e74;')};
	}

	&:active {
		background-color: #561e74;
	}
`
export const ButtonWrapper = styled.div<{ isDone: boolean }>`
	display: flex;
	flex-direction: row;
	gap: 5px;
	visibility: hidden;

	${Container}:hover & {
		visibility: ${(props) => (props.isDone ? 'hidden' : 'visible')};
	}
`
