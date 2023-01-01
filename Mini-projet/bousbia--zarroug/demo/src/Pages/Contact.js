
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import {
	Button ,
	Container,
	Text,
	Title,
	Modal,
	TextInput,
	Group,
	Card,
	ActionIcon,
	
} from '@mantine/core';
import { useState, useRef, useEffect } from 'react';
import { Home2, MoonStars, Sun, Trash } from 'tabler-icons-react';

import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';


  
const Contact = () => {
	const [Contact, setContact] = useState([]);
	const [opened, setOpened] = useState(false);


	const [colorScheme, setColorScheme] = useLocalStorage({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
		getInitialValueInEffect: true,
	});
	const toggleColorScheme = value =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	useHotkeys([['mod+J', () => toggleColorScheme()]]);

	const taskTitle = useRef('');
	const email = useRef('');
	const number = useRef('');

	function createTask() {
		setContact([
			...Contact,
			{
				title: taskTitle.current.value,
				summary: email.current.value,
				summary2: number.current.value,

			},
		]);

		saveContact([
			...Contact,
			{
				title: taskTitle.current.value,
				summary: email.current.value,
				summary2: number.current.value,

			},
		]);
	}


	function loadContact() {
		let loadedContact = localStorage.getItem('Contact');

		let Contact = JSON.parse(loadedContact);

		if (Contact) {
			setContact(Contact);
		}
	}

	function saveContact(Contact) {
		localStorage.setItem('Contact', JSON.stringify(Contact));
	}

	useEffect(() => {
		loadContact();
	}, []);
return (
	<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}>
			<MantineProvider
				theme={{ colorScheme, defaultRadius: 'md' }}
				withGlobalStyles
				withNormalizeCSS>
				<div className='App'>

					<Modal
						opened={opened}
						size={'md'}
						title={'New Contact'}
						withCloseButton={false}
						onClose={() => {
							setOpened(false);
						}}
						centered>
						<TextInput
							mt={'md'}
							ref={taskTitle}
							required
							label={'Name'}
						/>
						<TextInput
							ref={number}
							mt={'md'}
							label={'Number Phone'}
						/>
						<TextInput
							ref={email}
							mt={'md'}
							label={'Email'}
						/>
						
						<Group mt={'md'} position={'apart'}>
							<Button
								onClick={() => {
									setOpened(false);
								}}
								variant={'subtle'}>
								Cancel
							</Button>
							<Button
								onClick={() => {
									createTask();
									setOpened(false);
								}}>
								Create contact .
							</Button>
						</Group>
					</Modal>
					
					<Container size={550} my={40}>
						<Group position={'apart'}>
						<Title
								sx={theme => ({
									fontFamily: `Greycliff CF, ${theme.fontFamily}`,
									fontWeight: 900,
								})}>
Contact							</Title>

							<ActionIcon
								color={'blue'}
								onClick={() => toggleColorScheme()}
								size='lg'>
								{colorScheme === 'dark' ? (
									<Sun size={40} />
								) : (
									<MoonStars size={40} />
								)}
							</ActionIcon>
							
						</Group>
						
						<Group position={'apart'}>
						<Button 
							>
								<Link to="/contact/MyContacts">Display Contacts .</Link>
						</Button>
						<Button
							onClick={() => {
								setOpened(true);
							}}
							>
							New Contact .
						</Button>
						</Group>
						
					</Container>
					<Outlet />
					<Container size={550} my={40}>

                    <Group position={'end'}>
					<Link to="/">
					<ActionIcon
								color={'blue'}
								
								size='lg'>
								<Home2 size={1000} />
							</ActionIcon>
							</Link>
							</Group>

							</Container>
				</div>

			</MantineProvider>
		</ColorSchemeProvider>
		
	);
						}
  export default Contact
//   				<Outlet />
