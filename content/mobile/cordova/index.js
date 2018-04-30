import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/introduction.md'
import Step1 from './parts/step1.md'
import Step2 from './parts/step2.md'
import Step3 from './parts/step3.md'
import Step4 from './parts/step4.md'
import Step5 from './parts/step5.md'
import Step6 from './parts/step6.md'
import Step7 from './parts/step7.md'

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
	</React.Fragment>
)

export default () => <Component />
