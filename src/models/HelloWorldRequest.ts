import { NextApiRequest } from "next";

export interface HelloWorldRequest extends NextApiRequest {
  query: {
    brand: string;
    sku: string;
  };
}
