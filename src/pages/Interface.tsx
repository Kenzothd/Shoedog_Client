export interface Ilistings {
  country: string;
  email: string;
  first_name: string;
  last_name: string;
  listing_id: number;
  listing_price: number;
  password: string;
  shoe_brand: string;
  shoe_description: string;
  shoe_id: number;
  shoe_img: string;
  shoe_model: string;
  shoe_size: string;
  sold: boolean;
  user_id: number;
  verified: string;
}

export interface IAlerts {
  alert_id: number;
  alert_price: number;
  country: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  shoe_brand: string;
  shoe_description: string;
  shoe_id: number;
  shoe_img: string;
  shoe_model: string;
  shoe_size: string;
  user_id: number;
  verified: string;
}

export interface Ishoes {
  shoe_brand: string;
  shoe_description: string;
  shoe_id: number;
  shoe_img: string;
  shoe_model: string;
  shoe_size: string;
}
