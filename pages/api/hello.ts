/* eslint-disable prefer-arrow/prefer-arrow-functions */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const posts = await axios.get(apiUrl);
  res.status(200).json(posts.data);
}
