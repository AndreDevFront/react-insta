export interface InstagramBusinessAccount {
    followers_count: number;
    id: string;
    media: InstagramPost[];
    
}

export interface InstagramPost {
  comments_count: number;
  like_count: number;
  thumbnail_url: string;
  permalink: string;
  media_url: string;
  media_type: string;
  insights: {
    data: {
      values: {
        value: number;
      }[];
    }[];
  };
}