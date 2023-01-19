import React from 'react'
import ReactDOM from 'react-dom/client'
import EMPLOYEES from './EMPLOYEES.json'
import CustomTable from './lib/customTable/customReactTable'
import { employeesTableSetup } from './employeesTableSetup'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<CustomTable
			data={EMPLOYEES}
			fieldsSetup={employeesTableSetup}
			defaultSortingField='startDateString'
			defaultSortingOrder='asc'
			paginationOptions={['3', '5', '10', '20']}
			defaultPaginationOption={'10'}
		/>
	</React.StrictMode>
)
