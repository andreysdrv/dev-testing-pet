import React, { FC } from 'react'
import './Error.css'

interface ErrorProps {
	error: string | null
}

const Error: FC<ErrorProps> = ({ error }) => {
	return (
		<div className='container'>
			<div className='error'>{error}</div>
		</div>
	)
}

export default Error
