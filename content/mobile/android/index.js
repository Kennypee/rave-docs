import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/introduction.md'
import CreateAndroidProject from './parts/create-android-project.md'
import UseCase from './parts/use-case.md'
import RavePayManagerMethods from './parts/rave-pay-manager-methods.md'

//Shared components
import Requirements from './../_shared/requirements.md'
import CreateARaveAccount from './../_shared/create-a-rave-account.md'
import SetupRave from './../_shared/setup-rave.md'
import CustomizeTheUI from './../_shared/customize-the-ui.md'
import GetPaid from './../_shared/get-paid.md'
import Testing from './../_shared/testing.md'
import WhatsNext from './../_shared/whats-next.md'
import Help from './../_shared/help.md'

const Component = () => (
	<React.Fragment>
		<div className={contentStyle.markdown} id="introduction"><Intro /></div>
		<div className={contentStyle.markdown} id="requirements"><Requirements /></div>
		<div className={contentStyle.markdown} id="create-a-rave-account"><CreateARaveAccount /></div>
		<div className={contentStyle.markdown} id="create-android-project"><CreateAndroidProject /></div>
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
