import AWS from 'aws-sdk';
import aws_config from '../config/aws';

const SES = new AWS.SES(aws_config);

export const sendEmail = ({ from, recipients, subject, html }) => {
	let params = {
		Source: from,
		Destination: {
			BccAddresses: recipients,
		},
		ReplyToAddresses: [],
		Message: {
			Body: {
				Html: {
					Charset: "UTF-8",
					Data: html,
				},
			},
			Subject: {
				Charset: "UTF-8",
				Data: subject,
			},
		},
	};
	return SES.sendEmail(params).promise();
};
