interface ResultItem {
  id: string;
  title: string;
  price: number;
  banner: string;
  type: {
    id: string;
    type: string;
  };
  category: {
    id: string;
    name: string;
  };
  address: {
    id: string;
    state: string;
    city: string;
    town: string;
    description: string | null;
    created_at: string;
    updated_at: string;
  };
  features: {
    id: string;
    bedrooms: number;
    bathrooms: number;
    packing_space: number;
    balcony: boolean;
  };
  slug: string;
  created_at: string;
  updated_at: string;
}

interface ResultResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: ResultItem[];
}

interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  banner: string;
  terms_and_condition: string;
  type: {
    id: string;
    type: string;
  };
  category: {
    id: string;
    name: string;
  };
  is_available: boolean;
  is_sold: boolean;
  is_negotiable: boolean;
  slug: string;
  manager: {
    first_name: string;
    last_name: string;
    nickname: string;
    contact: {
      phone_one: string;
      phone_two: string;
      email: string;
    };
  };
  features: {
    id: string;
    bedrooms: number;
    bathrooms: number;
    packing_space: number;
    balcony: boolean;
  };
  address: {
    id: string;
    state: string;
    city: string;
    town: string;
    description: string | null;
    created_at: string;
    updated_at: string;
  };
  images: Array<{
    id: string;
    image: string;
  }>;
  created_at: string;
  updated_at: string;
}
