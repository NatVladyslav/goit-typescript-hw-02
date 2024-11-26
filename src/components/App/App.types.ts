export interface IAppState {
  currentPage: number;
  totalPages?: number;
}

// ImageCard.types.ts
export interface IImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  likes: number;
}

export interface ISelectImg {
  urls: {
    regular: string;
  };
  alt_description: string;
  likes: number;
}
