
import { IItem } from "hacker-news-api-types";
type LoadingStatus = "idle" | "loading" | "succeeded" | "failed";


export interface Stories {
    stories: IItem[];	
    page: number;
    limit: number;
    type: string;  
  }

  export interface RecentBoxProps {
	stories: IItem[];
	href: string;
}