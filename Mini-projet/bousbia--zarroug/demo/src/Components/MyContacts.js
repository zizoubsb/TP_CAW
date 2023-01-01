import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import {
	Container,

	
} from '@mantine/core';
import { useState, useRef, useEffect } from 'react';

import { useColorScheme } from '@mantine/hooks';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
  
const MyContacts = () => {
  const [Contact, setContact] = useState([]);
	const [opened, setOpened] = useState(false);


	const preferredColorScheme = useColorScheme();
	const [colorScheme, setColorScheme] = useLocalStorage({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
		getInitialValueInEffect: true,
	});
	const toggleColorScheme = value =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	useHotkeys([['mod+J', () => toggleColorScheme()]]);


	function loadContact() {
		let loadedContact = localStorage.getItem('Contact');

		let Contact = JSON.parse(loadedContact);

		if (Contact) {
			setContact(Contact);
		}
	}

	

	useEffect(() => {
		loadContact();
	}, []);
  return (
	
    <Container size={550} my={40}>
					<div className="Page">
					<table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
        {Contact.map((task, index) => {
          return (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.summary2
													? task.summary2
													: 'No '}</td>
              <td>{task.summary
													? task.summary
													: 'No summary was provided for this contact'}</td>
            </tr>
          )
        })}
      </table>

					</div>
					</Container>
  ) 
  
}
  
export default MyContacts