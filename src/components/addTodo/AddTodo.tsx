import React from 'react'
import * as Styled from './styled'
import TextInput from '../textInput/TextInput'

const AddTodo = () => {
	return (
		<Styled.InputWrapper>
			<TextInput type='add' />
		</Styled.InputWrapper>
	)
}

export default AddTodo
