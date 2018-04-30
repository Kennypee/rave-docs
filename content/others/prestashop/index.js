import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/introduction.md'
import Step1 from './parts/step1.md'
import Step2 from './parts/step2.md'
import Step3 from './parts/step3.md'
import ModuleConfiguration from './parts/module-configuration.md'
import Usage from './parts/usage.md'
import More from './parts/more.md'

const Component = () => (
	<React.Fragment>
		<div className={contentStyle.markdown} id="introduction"><Intro /></div>
		<div className={contentStyle.markdown} id="step1"><Step1 /></div>
		<div className={contentStyle.markdown} id="step2"><Step2 /></div>
		<div className={contentStyle.markdown} id="step3"><Step3 /></div>
		<div className={contentStyle.markdown} id="module-configuration"><ModuleConfiguration /></div>
		<div className={contentStyle.markdown} id="usage"><Usage /></div>
		<div className={contentStyle.markdown} id="more"><More /></div>
	</React.Fragment>
)

export default () => <Component />
