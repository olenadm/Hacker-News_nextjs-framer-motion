
import { IItem } from "hacker-news-api-types";
type LoadingStatus = "idle" | "loading" | "succeeded" | "failed";


export interface Story {
    created_at: string;
    title: string;
    url: string;
    author: string;
    points: number;
    story_text: string;
    comment_text: string;
    num_comments: number;
    story_id: string;
    story_title: string;
    story_url: string;
    parent_id: string | null;
    created_at_i: number;
    _tags: string[];
    objectID: string;
  }

  export interface RecentBoxProps {
	stories: IItem[];
	href: string;
	/*isLoading: LoadingStatus;*/
}