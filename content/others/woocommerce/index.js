import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/0.introduction.md'
import Integration from './parts/1.integration.md'
import Configuration from './parts/2.configuring-your-plugin.md'

const Component = () => (
	<React.Fragment>
		<div className={contentStyle.markdown} id="introduction"><Intro /></div>
		<div className={contentStyle.markdown} id="integration"><Integration /></div>
		<div className={contentStyle.markdown} id="configuration"><Configuration /></div>
	</React.Fragment>
)

export default () => <Component />
