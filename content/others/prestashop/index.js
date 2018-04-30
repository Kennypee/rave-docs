import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/0.introduction.md'
import Step1 from './parts/1.step1.md'
import Step2 from './parts/2.step2.md'
import Step3 from './parts/3.step3.md'
import ModuleConfiguration from './parts/4.module-configuration.md'
import Usage from './parts/5.usage.md'
import More from './parts/6.more.md'

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
