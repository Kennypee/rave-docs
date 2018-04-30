import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/0.introduction.md'
import CreateARaveAccount from './parts/1.create-a-rave-account.md'
import CreateAnAngularApplication from './parts/2.create-an-angular-application.md'
import SetupRave from './parts/3.setup-rave.md'
import WhatNext from './parts/4.what-next.md'
import ServerSideValidation from './parts/5.server-side-validation-with-nodejs.md'
import More from './parts/6.more.md'

const Component = () => (
	<React.Fragment>
		<div className={contentStyle.markdown} id="introduction"><Intro /></div>
		<div className={contentStyle.markdown} id="create-a-rave-account"><CreateARaveAccount /></div>
		<div className={contentStyle.markdown} id="create-an-angular-application"><CreateAnAngularApplication /></div>
		<div className={contentStyle.markdown} id="setup-rave"><SetupRave /></div>
		<div className={contentStyle.markdown} id="what-next"><WhatNext /></div>
		<div className={contentStyle.markdown} id="server-side-validation-with-nodejs"><ServerSideValidation /></div>
		<div className={contentStyle.markdown} id="more"><More /></div>
	</React.Fragment>
)

export default () => <Component />
