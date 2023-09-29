import React from 'react'
import Checkbox from '../checkbox/Checkbox'
import TextInput from '../textInput/TextInput'
import Button from '../button/Button'
import * as Styled from './styled'
import useStore from '../../store/store'

type TodoItemProps = {
	todo: {
		id: string
		task: string
		isDone: boolean
	}
}

const TodoItem = ({ todo }: TodoItemProps) => {
	const [editing, setEditing] = React.useState('')

	const handleEditButtonClick = () => {
		setEditing(todo.id)
	}

	const handleDeleteButtonClick = () => {
		useStore.getState().deleteTodo(todo.id)
	}

	const handleItemClick = () => {
		console.log('clicked')
		useStore.getState().toggleTodo(todo.id)
	}

	return (
		<Styled.Container isDone={todo.isDone}>
			<Checkbox checked={todo.isDone} />
			{editing === todo.id ? (
				<TextInput
					type='update'
					id={todo.id}
					task={todo.task}
					setEditing={setEditing}
					editing={editing === todo.id}
				/>
			) : (
				<li onClick={handleItemClick}>{todo.task}</li>
			)}
			{editing !== todo.id && (
				<Styled.ButtonWrapper isDone={todo.isDone}>
					<Button icon='edit' handleClick={handleEditButtonClick} />
					<Button icon='delete' handleClick={handleDeleteButtonClick} />
				</Styled.ButtonWrapper>
			)}
		</Styled.Container>
	)
}

export default TodoItem
