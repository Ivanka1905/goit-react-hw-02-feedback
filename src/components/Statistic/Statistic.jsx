import { StatisticList, LiItem, LiItemB } from './Statistic.styled';

const Statistic = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <StatisticList>
      <LiItem>Good: {good}</LiItem>
      <LiItem>Neutral: {neutral}</LiItem>
      <LiItem>Bad: {bad}</LiItem>
      <LiItemB>Total: {total}</LiItemB>
      <LiItemB>Positive feedback: {positivePercentage}% </LiItemB>
    </StatisticList>
  );
};

export default Statistic;
