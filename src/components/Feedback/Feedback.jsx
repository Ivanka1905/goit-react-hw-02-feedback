import PropTypes from 'prop-types';
import { ButtonContainer, Button } from './Feedback.styled';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {
        options.map(option => {
        return <Button type="button" key={option} name={option} onClick={onLeaveFeedback}>
        {option}
      </Button>
        })
      }
      
      {/* <ButtonN type="button" name={options[1]} onClick={onLeaveFeedback}>
        Neutral
      </ButtonN>
      <ButtonB type="button" name={options[2]} onClick={onLeaveFeedback}>
        Bad
      </ButtonB> */}
    </ButtonContainer>
  );
};

export default Feedback;

Feedback.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};
