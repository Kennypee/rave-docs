import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/readme.md'

const Component = () => (
	<React.Fragment>
		<div className={contentStyle.markdown} id="introduction"><Intro /></div>
	</React.Fragment>
)

export default () => <Component />
