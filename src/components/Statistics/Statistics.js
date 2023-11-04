import { FeedbackList, FeedbackListItem } from "./Statistics.styled";

export function Statistics({ good, neutral, bad, Total, Positive }) {
  return (
      <FeedbackList>
        <FeedbackListItem>good : {good}</FeedbackListItem>
        <FeedbackListItem>neutral : {neutral}</FeedbackListItem>
        <FeedbackListItem>bad : {bad}</FeedbackListItem>
        <FeedbackListItem>Total : {Total}</FeedbackListItem>
        <FeedbackListItem>Positive feedback : {Positive}%</FeedbackListItem>
      </FeedbackList>
  
  );
}
