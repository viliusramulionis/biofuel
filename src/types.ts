export type Language = 'en' | 'lt';

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  inquiryType: 'fleet_fuel' | 'feedstock' | 'investment' | 'general';
  fleetSize?: string;
  message: string;
  consent: boolean;
}

export interface MetricItem {
  id: string;
  value: string;
  labelEn: string;
  labelLt: string;
  subEn: string;
  subLt: string;
  highlight?: boolean;
}
