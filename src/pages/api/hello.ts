import axios from "axios";
import { IItem } from "hacker-news-api-types";

const BASE_API_URL = "https://hacker-news.firebaseio.com/v0";
const ITEM_URL = "https://hn.algolia.com/api/v1/items/";
const DETAIL_URL = (id: number) => `${BASE_API_URL}/item/${id}.json`;

function getStoryType(type: string) {
  return `${BASE_API_URL}/${type}stories.json`;
}
async function getIdDetails(id: number) {
  const res = await axios.get(DETAIL_URL(id));
  return res.data;
}

const getStory = async (id: number) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export async function getdataLength(type: string) {
  const res = await axios.get(getStoryType(type));
  const details = res.data;
  const total = details.length;
  return total;
}

export async function getAllDetails(type: string, page: number, limit: number) {
  const res = await axios.get(getStoryType(type));
  const details = res.data;


  const promises: IItem[] = details.slice(page * limit, (page + 1) * limit).map(getIdDetails);

  return await Promise.all(promises);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
