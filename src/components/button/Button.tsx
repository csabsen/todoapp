import React from 'react'
import * as Styled from './styled'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft'

type ButtonProps = {
	icon: 'edit' | 'delete' | 'back'
	handleClick: () => void
}

const Button = ({ icon, handleClick }: ButtonProps) => {
	const getIcon = () => {
		switch (icon) {
			case 'edit':
				return <EditIcon fontSize='small' onClick={handleClick} />
			case 'delete':
				return <DeleteIcon fontSize='small' onClick={handleClick} />
			case 'back':
				return (
					<SubdirectoryArrowLeftIcon
						fontSize='small'
						onClick={handleClick}
					/>
				)
			default:
				return null
		}
	}

	return <Styled.Wrapper>{getIcon()}</Styled.Wrapper>
}

export default Button
