import { BtnFeedback, BtnList } from './FeedbackOptions.styled'

export function FeedbackOptions({ positive, negative, neutral }) {
  return (
    <BtnList>
      <BtnFeedback type='button' onClick={positive}>Good</BtnFeedback>
      <BtnFeedback type='button' onClick={neutral}>Neutral</BtnFeedback>
      <BtnFeedback type='button' onClick={negative}>Bad</BtnFeedback>
    </BtnList>
  );
}

