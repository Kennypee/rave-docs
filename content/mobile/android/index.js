import React from 'react';
import Intro from './parts/0.introduction.md'
import Requirements from './parts/1.requirements.md'
import CreateARaveAccount from './parts/2.create-a-rave-account.md'
import SetupRave from './parts/3.setup-rave.md'
import UseCase from './parts/4.use-case.md'
import RavePayManagerMethods from './parts/5.rave-pay-manager-methods.md'
import CustomizeTheUI from './parts/6.customize-the-ui.md'
import GetPaid from './parts/7.get-paid.md'
import Testing from './parts/8.testing.md'
import WhatsNext from './parts/9.whats-next.md'
import Help from './parts/10.help.md'
import contentStyle from 'content/style.scss';

const Component = () => (
	<React.Fragment>
		<div className={contentStyle.markdown} id="introduction"><Intro /></div>
		<div className={contentStyle.markdown} id="requirements"><Requirements /></div>
		<div className={contentStyle.markdown} id="create-a-rave-account"><CreateARaveAccount /></div>
		<div className={contentStyle.markdown} id="setup-rave"><SetupRave /></div>
		<div className={contentStyle.markdown} id="use-case"><UseCase /></div>
		<div className={contentStyle.markdown} id="rave-pay-manager-methods"><RavePayManagerMethods /></div>
		<div className={contentStyle.markdown} id="customize-the-ui"><CustomizeTheUI /></div>
		<div className={contentStyle.markdown} id="get-paid"><GetPaid /></div>
		<div className={contentStyle.markdown} id="testing"><Testing /></div>
		<div className={contentStyle.markdown} id="whats-next"><WhatsNext /></div>
		<div className={contentStyle.markdown} id="help"><Help /></div>
	</React.Fragment>
)


export default Component
