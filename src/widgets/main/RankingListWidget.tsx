import { useQuery } from '@tanstack/react-query';
import { MovieList } from './component/MovieList';
import { MainSection, ErrorContent, ContentWrapper, TotalValueCardLayoutWrapper } from './RankingListWidget.styled';
import { TotalAudiCnt, TotalSales } from '@entities/movie/ui';
import { fetchRankTop10Data } from '@shared/api/movie';
import { FilterStore, IFilterStore } from '@store/filter';

export const RankingListWidget = () => {
  // ======== [ zustand state management] ==========
  const { date, nation } = FilterStore<IFilterStore>((state) => state);
  const { data, isError } = useQuery({
    queryKey: ['movieData', date, nation],
    queryFn: async () => fetchRankTop10Data({ date, nation }),
    refetchOnWindowFocus: false,
    // enabled: false, // 특정한 트리거 없이 자동으로 호출되지 않도록 설정
  });

  return (
    <MainSection>
      {isError ? (
        <ErrorContent>데이터 요청에 문제가 발생하였습니다. 잠시 후 다시 시도해주세요.</ErrorContent>
      ) : (
        <ContentWrapper>
          <TotalValueCardLayoutWrapper>
            <TotalAudiCnt />
            <TotalSales />
          </TotalValueCardLayoutWrapper>
          <MovieList data={data} />
        </ContentWrapper>
      )}
    </MainSection>
  );
};
