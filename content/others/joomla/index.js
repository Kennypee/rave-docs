import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/0.introduction.md'
import Step1 from './parts/1.step1.md'
import Step2 from './parts/2.step2.md'
import Step3 from './parts/3.step3.md'
import Step4 from './parts/4.step4.md'
import Step5 from './parts/5.step5.md'
import Step6 from './parts/6.step6.md'
import Step7 from './parts/7.step7.md'
import Step8 from './parts/8.step8.md'
import More from './parts/9.more.md'

const Component = () => (
	<React.Fragment>
		<div className={contentStyle.markdown} id="introduction"><Intro /></div>
		<div className={contentStyle.markdown} id="step1"><Step1 /></div>
		<div className={contentStyle.markdown} id="step2"><Step2 /></div>
		<div className={contentStyle.markdown} id="step3"><Step3 /></div>
		<div className={contentStyle.markdown} id="step4"><Step4 /></div>
		<div className={contentStyle.markdown} id="step5"><Step5 /></div>
		<div className={contentStyle.markdown} id="step6"><Step6 /></div>
		<div className={contentStyle.markdown} id="step7"><Step7 /></div>
		<div className={contentStyle.markdown} id="step8"><Step8 /></div>
		<div className={contentStyle.markdown} id="more"><More /></div>
	</React.Fragment>
)

export default () => <Component />
