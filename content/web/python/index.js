import React from 'react';
import contentStyle from 'content/style.scss';
import Intro from './parts/0.introduction.md'
import CreateARaveAccount from './parts/1.create-a-rave-account.md'
import CreateAFlaskApplication from './parts/2.create-a-flask-application.md'
import SetupRave from './parts/3.setup-rave.md'
import WhatNext from './parts/4.what-next.md'
import More from './parts/5.more.md'

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
