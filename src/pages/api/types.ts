import { IItem } from "hacker-news-api-types";
type LoadingStatus = "idle" | "loading" | "succeeded" | "failed";

export interface Stories {
  stories: IItem[]; 
  type: string;
}
export interface Pagination {
 currentPage: number;
 totalPages: number; 
 next: ()=>{};
 previous: ()=>{};
}

export interface RecentBoxProps {
  stories: IItem[];
  href: string;
  isLoading: boolean;
}
