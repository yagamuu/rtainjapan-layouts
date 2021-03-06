import '../lib/react-devtools';

// Packages
import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

// Ours
import {Checklist} from './components/checklist';
import {Schedule} from './components/schedule';
import {Timekeeper} from './components/timekeeper';
import {Twitter} from './components/twitter';
import {twitterCallback} from './lib/twitter-callback';

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	padding: 16px;
	box-sizing: border-box;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`;

const Column = styled.div`
	display: grid;
	gap: 16px;
`;

const LeftColumn = Column.extend`
	height: calc(100vh - 32px);
	grid-template-rows: 1fr auto;
`;

export const App = () => (
	<Container>
		<LeftColumn>
			<Timekeeper />
			<Checklist />
		</LeftColumn>
		<Column>
			<Schedule />
		</Column>
		<Column>
			<Twitter />
		</Column>
	</Container>
);

twitterCallback();

document.body.style.margin = '0';
document.body.style.padding = '0';

ReactDom.render(<App />, document.getElementById('tech'));
