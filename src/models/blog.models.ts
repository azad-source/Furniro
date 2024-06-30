export interface IBlog {
  id: string;
  name: string;
  img?: string;
  imgPreview?: string;
  shortDescription?: string;
  description?: string;
  userName: string;
  createdAt: string;
  category: string;
}

export interface IRecentBlog {
  id: string;
  name: string;
  img?: string;
  createdAt: string;
}
