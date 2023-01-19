# LB's react table (lbs-react-table)

A simple table component for React with

-   Pagination
-   Searching
-   Sorting
-   Responsiveness on narrow screens

### Why

Several parts of making a table with pagination, filtering and sorting can be challenging

-   Dynamically generate a table from any data
-   Synchronyzing state for all elements (sorting, searching, pagination)
-   Tables responsiveness on narrow screens

### Installation

```
$ npm install lbs-react-table  --save
```

### Changelog

First release version.

This version is stable, but might not have been tested for all use cases so be sure to test your app to make sur the table works as you want.

### Basic usage

This is the basic usage of lbs-react-table

```Javascript
import CustomReactTable from 'lbs-react-table/dist/customTable/customTable'

const data = [
	{"firstName": "Emily", "lastName": "Smith"},
	{"firstName": "Michael", "lastName": "Williams"},
	{"firstName": "Ashley", "lastName": "Brown"}
]

const fieldsSetup = [
	{ fieldName: 'FIRST NAME', fieldValue: 'firstName', fieldDisplay: 'firstName' },
	{ fieldName: 'LAST NAME', fieldValue: 'lastName', fieldDisplay: 'lastName' },
]

<CustomReactTable
	data={data}
	fieldsSetup={fieldsSetup}
	defaultSortingField='firstName'
	defaultSortingOrder='asc'
	paginationOptions={['3', '5', '10', '20']}
	defaultPaginationOption={'10'}
/>

```

### Guide

#### Input data (data prop)

-   The data that you pass to the component in the data prop needs to follow the same format as in the example above.
-   You can pass any type of data but if you want to use it in the table for sorting, it needs to be a string.

Other example

```Javascript
const data = [
	{"email": "emily@gmail.com", "age": "33", "color": "red"},
	{"email": "michael@outlook.com", "age": "42", "color": "blue"},
	{"email": "ashley@gmail.com", "age": "28", "color": "red"}
]
```

#### Define what gets displayed (fieldsSetup prop)

-   Each object defines the header of the column, its displayed content, and its value for sorting (not for searching!)
-   We differentiate what is displayed and the actual value to manage specific case such as dates
-   You can display the date formatted as you want, but use the numeric value for sorting

Example of using different fieldValue and fieldDisplay for a column to sort dates in the table

```Javascript
const data = [
	{"firstName": "Emily", "dateOfBirth": "02/22/1982", "dateOfBirthString": "383180400000"},
	{"firstName": "Michael", "dateOfBirth": "08/11/1990", "dateOfBirthString": "650325600000"}
]

// this will make the sorting on birth date use the dateOfBirthString, but display the dateOfBirth in the table
const fieldsSetup = [
	{ fieldName: 'FIRST NAME', fieldValue: 'firstName', fieldDisplay: 'firstName' },
	{ fieldName: 'BIRTH DATE', fieldValue: 'dateOfBirthString', fieldDisplay: 'dateOfBirth' },
]
```

#### Other props

##### defaultSortingField :

Defines which fieldValue will be use to sort the data by default. If left empty, no sorting by default

##### defaultSortingOrder :

Can take values "asc" or "desc" to define the default sorting order, if a defaultSortingField is defined

##### paginationOptions:

Defines the options for the pagination dropdown menu. This lets users control how many results are displayed per page

##### defaultPaginationOption :

Defines which pagination option should be selected by default
