import { RateStarIcon } from "assets/icons/RateStarIcon";
import styled from "styled-components";

const StarWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

interface IProps {
  rating: number;
}

const StarRating = ({ rating }: IProps) => {
  // Ensure the rating is between 0 and 5
  const safeRating = Math.min(Math.max(rating, 0), 5);

  // Calculate the number of fully filled, half filled and empty stars
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating - fullStars > 0;
  const halfStarRatio = (safeRating - fullStars) * 100;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <StarWrapper>
      {[...Array(fullStars)].map((_, index) => (
        <RateStarIcon key={`full-${index}`} ratio={100} />
      ))}
      {hasHalfStar && <RateStarIcon key="half" ratio={halfStarRatio} />}
      {[...Array(emptyStars)].map((_, index) => (
        <RateStarIcon key={`empty-${index}`} ratio={0} />
      ))}
    </StarWrapper>
  );
};

export default StarRating;
