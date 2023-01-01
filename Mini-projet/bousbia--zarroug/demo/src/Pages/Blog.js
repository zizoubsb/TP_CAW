
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
import { Home, Home2, MoonStars, Sun, Trash } from 'tabler-icons-react';

import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';


  
const Blog = () => {
	const [Blog, setBlog] = useState([]);
	const [opened, setOpened] = useState(false);

 
    const [likes, setLikes] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
   


	const preferredColorScheme = useColorScheme();
	const [colorScheme, setColorScheme] = useLocalStorage({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
		getInitialValueInEffect: true,
	});
	const toggleColorScheme = value =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	useHotkeys([['mod+J', () => toggleColorScheme()]]);
   
	const BlogTitle = useRef('');
	const email = useRef('');
	const number = useRef('');
  
	function createBlog() {
		setBlog([
			...Blog,
			{
				title: BlogTitle.current.value,
				summary: email.current.value,
				summary2: number.current.value,

			},
		]);

		saveBlog([
			...Blog,
			{
				title: BlogTitle.current.value,
				summary: email.current.value,
				summary2: number.current.value,

			},
		]);
	}


	function loadBlog() {
		let loadedBlog = localStorage.getItem('Blog');

		let Blog = JSON.parse(loadedBlog);

		if (Blog) {
			setBlog(Blog);
		}
	}

	function saveBlog(Blog) {
		localStorage.setItem('Blog', JSON.stringify(Blog));
	}
     
	useEffect(() => {
		loadBlog();
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
						title={'New Blog'}
						withCloseButton={false}
						onClose={() => {
							setOpened(false);
						}}
						centered>
						<TextInput
							mt={'md'}
							ref={BlogTitle}
							required
							label={'Subject'}
						/>
						<TextInput
							ref={number}
							mt={'md'}
							label={'Description'}
						/>
						<TextInput 
						type="date"
							ref={email}
							mt={'md'}
							label={'date'}
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
									createBlog();
									setOpened(false);
								}}>
								Create Blog .
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
Blog							</Title>

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
                        <Group mt={'md'} position={'apart'}>
								<Button 
							
							
							>
								<Link to="/Blog/Myblog">Display Blog .</Link>
						</Button>
						<Button
							onClick={() => {
								setOpened(true);
							}}
							>
							New Blog .
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
  export default Blog
