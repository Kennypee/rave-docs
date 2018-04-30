import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/introduction.md'
import Installation from './parts/installation.md'
import More from './parts/more.md'

const Component = () => (
	<React.Fragment>
		<div className={contentStyle.markdown} id="introduction"><Intro /></div>
		<div className={contentStyle.markdown} id="installation"><Installation /></div>
		<div className={contentStyle.markdown} id="more"><More /></div>
	</React.Fragment>
)

export default () => <Component />
