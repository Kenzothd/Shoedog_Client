export interface IListings {
  shoe_id: number;
  shoe_brand: string;
  shoe_img: string;
  shoe_model: string;
  shoe_release_date: string;
  shoe_retail_price: number;
  lowest_listing_price: number;
}

export interface IListingsAndUsersSoldFalse {
  listing_date: string;
  listing_date_close: string;
  listing_id: number;
  listing_price: number;
  shoe_id: number;
  shoe_size: string;
  sold: false;
  user_id: number;
  username: string;
  verified: boolean;
}

export interface IDisplayListings {
  listing_id: number;
  shoe_id: number;
  shoe_brand?: string;
  shoe_model: string;
  shoe_img: string;
  shoe_size: string;
  date: string;
  listing_price: number;
}

export interface IAlerts {
  shoe_img: string;
  shoe_model: string;
  shoe_size: string;
  alert_price: number;
  user_id: number;
  alert_id: number;
  shoe_id: number;
}

export interface IAlertsHistory {
  user_id: number;
  username: string;
  verified: boolean;
  shoe_id: number;
  shoe_img: string;
  shoe_model: string;
  shoe_size: string;
  listing_id: number;
  sold: boolean;
  alert_price: number;
  listing_price: number;
  listing_date: string;
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

export interface IVolumeStats {
  shoe_brand: string;
  shoe_model: string;
  shoe_id: number;
  shoe_img: string;
  lowest_listing_price: number;
  volume: number;
}

export interface IPriceHistoryData {
  "Average price": number;
  listing_start_date: string;
}

export interface IProfileDetails {
  country: string;
  first_name: string;
  followers: number;
  followings: number;
  joined_date: string;
  last_name: string;
  user_id: number;
  username: string;
  verified: boolean;
}
