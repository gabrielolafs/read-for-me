import { Route } from '../router';
import { Page } from '../db/models/Page';
import { Page as SharedPage } from '../../../shared/models/Page';

export const register = (route: Route) => {
  route({
    handler: async (req, res) => {
      const pageLookup = await Page.findById(req.params.id).exec();

      if (!pageLookup) {
        res.status(404).json({ error: 'Waypoint not found.' });
        return;
      }

      const page: SharedPage = {
        id: pageLookup._id.toHexString(),
        book: pageLookup.book._id.toHexString(),
        number: pageLookup.number,
        content: pageLookup.content,
      };

      res.status(200).json(page);
    },
    method: 'get',
    route: `/api/waypoint/:id`,
  });
};
