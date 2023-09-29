import React from 'react'
import StyledCheckbox from './styled'
import useStore from '../../store/store'

interface CheckboxProps {
	checked: boolean
	id: string
}

const Checkbox = ({ checked, id }: CheckboxProps) => {
	const handleClick = () => {
		useStore.getState().toggleTodo(id)
	}

	return (
		<>
			<StyledCheckbox
				type='checkbox'
				checked={checked}
				onClick={handleClick}
			/>
		</>
	)
}

export default Checkbox
