export interface Item {
  id: string;
  description: string;
  urls: ItemLinks;
  alt_description: string;
  likes: number;
}

interface ItemLinks {
  raw?: string;
  full?: string;
  regular?: string;
  small: string;
  self: string;
  download: string;
}

interface Total {
  total: number;
}

export interface ItemStats {
  id: string;
  likes: Total;
  downloads: Total;
  views: Total;
}
