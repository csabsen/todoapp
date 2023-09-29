import React from 'react'
import StyledCheckbox from './styled'

interface CheckboxProps {
	checked: boolean
}

const Checkbox = ({ checked }: CheckboxProps) => {
	return (
		<>
			<StyledCheckbox type='checkbox' checked={checked} />
		</>
	)
}

export default Checkbox
