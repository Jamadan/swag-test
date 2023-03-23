import { HelloWorldRequest } from "../../models/HelloWorldRequest";
import { HelloWorldResponse } from "../../models/HelloWorldResponse";
import { NextApiResponse } from "next";

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     parameters:
 *      - in: query
 *        name: model
 *        type: string
 *        required: true
 *        description: model indentifier
 *      - in: query
 *        name: colour
 *        type: string
 *        required: true
 *        description: colour identifier
 *     responses:
 *       200:
 *         description: hello world
 *       500:
 *         description: error
 */
const handler = (
  req: HelloWorldRequest,
  res: NextApiResponse<HelloWorldResponse | undefined>
) => {
  try {
    console.log(req.query.brand, req.query.sku);
    res.status(200).json({ ...req.query });
  } catch (e) {
    res.status(500).send(undefined);
  }
};

export default handler;
