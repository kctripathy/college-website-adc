import { EMAILJS_USER_ID } from '../../config';
import emailjs from 'emailjs-com';

const sendEmail = (templateId, templateParams) => {
    try {
        return emailjs.send('gmail', templateId, templateParams, EMAILJS_USER_ID)
            .then(res => res)
            .catch(err => err)
    }
    catch (e) {
        alert(e);
    }
};

export default sendEmail;