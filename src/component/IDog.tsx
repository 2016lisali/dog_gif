export interface IDog {
  id: string;
  images: Images;
}

interface Images {
  downsized_medium: Downsized_medium;
}

interface Downsized_medium {
  url: string;
}