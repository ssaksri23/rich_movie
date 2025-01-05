// 원하는 데이터 키에 대한 총 합계를 데이터를 반환하는 함수
export const getTotalData = ({ dataArray, targetKey }): number =>
  dataArray?.reduce((acc: number, cur: { [targetKey: string]: string }) => {
    acc += Number(cur[targetKey]);

    return acc;
  }, 0);
