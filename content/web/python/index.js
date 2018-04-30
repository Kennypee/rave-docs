import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/introduction.md'
import CreateAFlaskApplication from './parts/create-a-flask-application.md'
import SetupRave from './parts/setup-rave.md'

// Shared components
import CreateARaveAccount from './../_shared/create-a-rave-account.md'
import WhatNext from './../_shared/what-next.md'
import More from './../_shared/more.md'

const Component = () => (
	<React.Fragment>
		<div className={contentStyle.markdown} id="introduction"><Intro /></div>
		<div className={contentStyle.markdown} id="create-a-rave-account"><CreateARaveAccount /></div>
		<div className={contentStyle.markdown} id="create-a-flask-application"><CreateAFlaskApplication /></div>
		<div className={contentStyle.markdown} id="setup-rave"><SetupRave /></div>
		<div className={contentStyle.markdown} id="what-next"><WhatNext /></div>
		<div className={contentStyle.markdown} id="more"><More /></div>
	</React.Fragment>
)

export default () => <Component />
