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
  user_listing_id: number;
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
  user_alert_id: number;
  verified: string;
}

export interface IAllAlerts {
  alert_id: number;
  alert_price: number;
  listing_id: number;
  listing_price: number;
  shoe_brand: string;
  shoe_description: string;
  shoe_id: number;
  shoe_img: string;
  shoe_model: string;
  shoe_size: string;
  sold: boolean;
  user_alert_id: number;
  user_listing_id: number;
}

export interface IShoes {
  shoe_brand: string;
  shoe_description: string;
  shoe_id: number;
  shoe_img: string;
  shoe_model: string;
  shoe_likes: number;
  shoe_release_date: string;
  shoe_retail_price: number;
}

export interface IShoeData {
  shoe_id: number;
  shoe_brand: string;
  shoe_model: string;
  shoe_description: string;
  shoe_img: string;
  shoe_likes: number;
  shoe_release_date: string;
  shoe_retail_price: number;
  all_time_lowest_listing_price: number;
  all_time_highest_listing_price: number;
  average_listing_price: string;
  one_year_lowest_listing_price: number;
  one_year_highest_listing_price: number;
  volatility: string;
  number_of_sales: number;
}

export interface IVolume {
  shoe_id: number;
  shoe_brand: string;
  shoe_model: string;
  shoe_img: string;
  lowest_listing_price: number;
  total_volume: number;
  one_month_total_volume: number;
  three_month_total_volume: number;
  six_month_total_volume: number;
  one_year_total_volume: number;
}
