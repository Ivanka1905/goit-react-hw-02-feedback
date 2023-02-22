import PropTypes from 'prop-types';
import { ButtonContainer, ButtonG, ButtonN, ButtonB } from './Feedback.styled';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      <ButtonG type="button" name={options[0]} onClick={onLeaveFeedback}>
        Good
      </ButtonG>
      <ButtonN type="button" name={options[1]} onClick={onLeaveFeedback}>
        Neutral
      </ButtonN>
      <ButtonB type="button" name={options[2]} onClick={onLeaveFeedback}>
        Bad
      </ButtonB>
    </ButtonContainer>
  );
};

export default Feedback;

Feedback.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};
