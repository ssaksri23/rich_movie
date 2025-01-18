import { Skeleton } from '@mantine/core';

export const SharedDefaultSkeleton = ({ isLoading, children }) => {
  return (
    <Skeleton style={{ width: '100%' }} visible={isLoading} radius="xl">
      {children}
    </Skeleton>
  );
};
