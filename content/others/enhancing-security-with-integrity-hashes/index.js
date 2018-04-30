import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/introduction.md'
import IntegrityHashRules from './parts/integrity-hash-rules.md'
import Step1 from './parts/step1.md'
import Step2 from './parts/step2.md'
import Step3 from './parts/step3.md'
import Step4 from './parts/step4.md'
import Step5 from './parts/step5.md'
import Error from './parts/error.md'

const Component = () => (
	<React.Fragment>
		<div className={contentStyle.markdown} id="introduction"><Intro /></div>
		<div className={contentStyle.markdown} id="integrity-hash-rules"><IntegrityHashRules /></div>
		<div className={contentStyle.markdown} id="step1"><Step1 /></div>
		<div className={contentStyle.markdown} id="step2"><Step2 /></div>
		<div className={contentStyle.markdown} id="step3"><Step3 /></div>
		<div className={contentStyle.markdown} id="step4"><Step4 /></div>
		<div className={contentStyle.markdown} id="step5"><Step5 /></div>
		<div className={contentStyle.markdown} id="error"><Error /></div>
	</React.Fragment>
)

export default () => <Component />
