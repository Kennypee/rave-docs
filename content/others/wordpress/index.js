import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/0.introduction.md'
import Installation from './parts/1.installation.md'
import More from './parts/2.more.md'

const Component = () => (
	<React.Fragment>
		<div className={contentStyle.markdown} id="introduction"><Intro /></div>
		<div className={contentStyle.markdown} id="installation"><Installation /></div>
		<div className={contentStyle.markdown} id="more"><More /></div>
	</React.Fragment>
)

export default () => <Component />
