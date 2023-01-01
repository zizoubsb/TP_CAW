import React from 'react'

import {
	 	Container,

	
} from '@mantine/core';
import { useState, useRef, useEffect } from 'react';

import { useHotkeys, useLocalStorage } from '@mantine/hooks';

const Myblog = () => {
    const [Blog, setBlog] = useState([]);

 
    const [likes, setLikes] = useState(0);
    const [isLike, setIsLike] = useState(false);

  

    const likeHandler = (index) => {
        Blog.find((Blog, ind) => {
           
          if (ind !== index) {
            setLikes(likes + (isLike?-1:1));
            setIsLike(!isLike);

          } 
        });
      };
 
  
        
	const [colorScheme, setColorScheme] = useLocalStorage({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
		getInitialValueInEffect: true,
	});
	const toggleColorScheme = value =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	useHotkeys([['mod+J', () => toggleColorScheme()]]);
   

	function loadBlog() {
		let loadedBlog = localStorage.getItem('Blog');

		let Blog = JSON.parse(loadedBlog);

		if (Blog) {
			setBlog(Blog);
		}
	}

	
     
	useEffect(() => {
		loadBlog();
	}, []);
    
  return (
    <Container size={550} my={40}>
      	<div className="Page">
					<table>
        <tr>
          <th>Subject</th>
          <th>Description</th>
          <th>date</th>
          <th>likes</th>
		  
        </tr>
        {Blog.map((task, index) => {
          return (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.summary2
													? task.summary2
													: 'No '}</td>
              <td>{task.summary
													? task.summary
													: 'No summary was provided for this contact'}</td>
                                                    <td><img className='likeIcon' src="/assets/like.png" onClick={() => likeHandler(index)} alt="" />
                                                    <span className="postLikeCounter">Like {likes}</span> 

</td>
            </tr>
          )
        })}
      </table>

					</div>

</Container>
  )
}
  
export default Myblog
