interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  banner: string;
  slug: string;
  address: string;
  category: string;
}

interface Property {
  count: number;
  next: null | string;
  previous: null | string;
  results: Listing[];
}

interface Contact {
  phone_one: string;
  phone_two: string;
  email: string;
}

interface Manager {
  first_name: string;
  last_name: string;
  nickname: string;
  contact: Contact;
  avata: string;
}

interface Address {
  state: string;
  city: string;
}

interface Image {
  id: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
}

interface PropertyDetail {
  id: string;
  title: string;
  description: string;
  price: number;
  banner: string;
  category: Category;
  is_available: boolean;
  is_sold: boolean;
  is_negotiable: boolean;
  slug: string;
  manager: Manager;
  address: Address;
  images: Image[];
  created_at: string;
  updated_at: string;
}
