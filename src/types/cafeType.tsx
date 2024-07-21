//카페 영업 시간 인터페이스
export interface BusinessHours {
  day: string;
  startTime: string;
  endTime: string;
}

//카페 SNS 인터페이스
export interface SNS {
  name: string;
  url: string;
}

//카페 리스트 인터페이스
export interface CafeList {
  cafeId: number;
  name: string;
  address: string;
  area: string;
  businessHours: BusinessHours[] | undefined;
  isOpen: boolean | undefined;
  sns: SNS[] | undefined;
  phone: string | undefined;
  minBeveragePrice: number | undefined;
  maxTime: number | undefined;
  avgReviewRate: number;
  canStudy: boolean;
}
