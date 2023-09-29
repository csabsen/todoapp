import React from 'react'
import * as Styled from './styled'
import useStore from '../../store/store'
import { nanoid } from 'nanoid'
import { ClickAwayListener } from '@mui/material'

type Props = {
	type: 'add' | 'update'
	id?: string
	task?: string
	setEditing?: React.Dispatch<React.SetStateAction<string>>
	editing?: boolean
}

const TextInput = ({ type, id, task, setEditing, editing }: Props) => {
	const [value, setValue] = React.useState(task ? task : '')
	const inputRef = React.useRef<HTMLInputElement>(null)

	React.useEffect(() => {
		inputRef.current?.focus()
	}, [])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const handleUpdate = () => {
		id && useStore.getState().updateTodo(id, value)
		setEditing && setEditing('')
	}

	const handleOnClickAway = (event: MouseEvent | TouchEvent) => {
		handleUpdate()
	}

	const handleAddTodo = () => {
		useStore.getState().addTodo({
			id: nanoid(),
			task: value,
			isDone: false,
		})
		setValue('')
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			type === 'add' ? handleAddTodo() : handleUpdate()
		}
	}

	return (
		<>
			{editing ? (
				<ClickAwayListener onClickAway={handleOnClickAway}>
					<Styled.Input
						ref={inputRef}
						value={value}
						placeholder={type === 'add' ? 'Add a todo...' : ''}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
					/>
				</ClickAwayListener>
			) : (
				<Styled.Input
					ref={inputRef}
					value={value}
					placeholder={type === 'add' ? 'Add a todo...' : ''}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
			)}
		</>
	)
}

export default TextInput
