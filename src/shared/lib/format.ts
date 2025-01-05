/** '원' 단위의 데이터를 '만원' 단위의 데이터로 변환하는 핸들러 함수 */
export const formatWonToMillionWon = (wonUnitData: number) => Math.ceil(wonUnitData / 10000);
