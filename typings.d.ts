type Article = {
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  count: Int;
  limit: Int;
  ofset: Int;
  total: Int;
};

type NewsRespose = {
  pagination: Pagination;
  data: Article[];
};

type Category =
  | "general"
  | "business"
  | "entertaiment"
  | "health"
  | "science"
  | "sports"
  | "technology";
