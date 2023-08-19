import { NextApiRequest, NextApiResponse } from 'next';
import { getListener } from '../../service/main';

export default (req: NextApiRequest, res: NextApiResponse) => new Promise(async (resolve) => {
  const listener = await getListener();
  listener(req, res);
  res.on('finish', resolve);
});
