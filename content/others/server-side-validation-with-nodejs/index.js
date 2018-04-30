import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/introduction.md'
import ImportantCriteria from './parts/important-criteria.md'
import SampleCode from './parts/sample-code.md'

const Component = () => (
	<React.Fragment>
		<div className={contentStyle.markdown} id="introduction"><Intro /></div>
		<div className={contentStyle.markdown} id="important-criteria"><ImportantCriteria /></div>
		<div className={contentStyle.markdown} id="smaple-code"><SampleCode /></div>
	</React.Fragment>
)

export default () => <Component />
