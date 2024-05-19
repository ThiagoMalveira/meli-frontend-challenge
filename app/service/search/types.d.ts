export type Paging = {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
};

export type SortOption = {
  id: string;
  name: string;
};

export type PdpTracking = {
  group: boolean;
  product_info: any[];
};

export type ApiResponse = {
  site_id: string;
  country_default_time_zone: string;
  paging: Paging;
  results: Product[] | [];
  sort: SortOption;
  available_sorts: SortOption[];
  filters: any[];
  available_filters: any[];
  pdp_tracking: PdpTracking;
};

type Shipping = {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
  benefits: null | string;
  promise: null | string;
};

type Seller = {
  id: number;
  nickname: string;
};

type AttributeValue = {
  id: null | string;
  name: string;
  struct: null | string;
  source: number;
};

type Attribute = {
  id: string;
  name: string;
  value_id: null | string;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct: null | string;
  values: AttributeValue[];
  source: number;
  value_type: string;
};

type Installments = {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
};

export type ISorts = {
  id: string;
  name: string;
};

type values = {
  id: string;
  name: string;
  results: number;
};

export type IFilters = {
  id: string;
  name: string;
  type: string;
  values: values[];
};

export type Product = {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: null | string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number | null;
  sale_price: number | null;
  available_quantity: number;
  official_store_id: null | string;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: string;
  seller: Seller;
  attributes: Attribute[];
  installments: Installments | null;
  winner_item_id: null | string;
  catalog_listing: boolean;
  discounts: null | string;
  promotions: any[];
  inventory_id: string;
};
