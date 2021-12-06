import React, { ReactNode } from 'react'
import './List.css'

interface ListProps<T> {
	items: T[]
	renderItem: (item: T) => ReactNode
}

export default function List<T>(props: ListProps<T>) {
	return <div className='questions'>{props.items.map(props.renderItem)}</div>
}