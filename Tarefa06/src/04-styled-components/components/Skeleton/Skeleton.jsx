// src/04-styled-components/components/Skeleton/Skeleton.jsx
import { StyledSkeletonCard, SkeletonImageContainer, SkeletonImage, SkeletonInfo, SkeletonLine } from './Skeleton.styles';

const Skeleton = () => {
  return (
    <StyledSkeletonCard>
      <SkeletonImageContainer>
        <SkeletonImage />
      </SkeletonImageContainer>
      <SkeletonInfo>
        <SkeletonLine type="title" />
        <SkeletonLine type="price" />
        <SkeletonLine type="rating" />
        <SkeletonLine type="tag" />
        <SkeletonLine type="button" />
      </SkeletonInfo>
    </StyledSkeletonCard>
  );
};

export default Skeleton;