import { send_mail } from '../../ses/send-mail';

export default {
	key: "send-mail",
	async handle(job) {
		const sender = await send_mail(job.data);

        console.log('Mail sent', sender);

        return sender
	},
};
