import PropTypes from 'prop-types'
import React from 'react'

/**
 *
 * The Search bar part of the custom table component
 *
 * @function Search
 *
 * @returns the Search component
 *
 */

export default function Search({ onSearch }) {
	return (
		<input
			type='text'
			className='search-field'
			placeholder='Search the table'
			onChange={(e) => onSearch(e.target.value)}
		/>
	)
}

Search.propTypes = {
	onSearch: PropTypes.func
}
