import flatten from 'flat';
import header from './header.json';
import forgotpassword from './forgotpassword.json';
import resetpassword from './resetpassword.json';
import common from './common.json';
import messages from './messages.json';
import cfrs from './cfrs.json';
import feedback from './feedback.json';

const locale = {
  header: flatten(header, {
    delimiter: '_',
  }),
  messages: flatten(messages, {
    delimiter: '_',
  }),
  common: flatten(common, {
    delimiter: '_',
  }),
  forgotpassword: flatten(forgotpassword, {
    delimiter: '_',
  }),
  resetpassword: flatten(resetpassword, {
    delimiter: '_',
  }),
  cfrs: flatten(cfrs, {
    delimiter: '_',
  }),
  feedback: flatten(feedback, {
    delimiter: '_',
  }),
};
export default locale;
