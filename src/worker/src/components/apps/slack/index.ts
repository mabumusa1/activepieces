import {createComponent} from '../../framework/component';
import {slackSendMessageAction} from './actions/send-message-action';

export const slack = createComponent({
	name: 'Slack',
	logoUrl: 'https://cdn.activepieces.com/components/slack/logo.png',
	actions: [slackSendMessageAction],
	triggers: [],
});
