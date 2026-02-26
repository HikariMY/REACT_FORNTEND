import PropTypes from 'prop-types';

export default function Contact({ email, phone }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{email} | {phone}</h2>
      <p>Send me a message!</p>
    </div>
  );
}

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};