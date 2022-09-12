import { Request, Response } from 'express';
import { insertCrag, selectAllCrags } from "./db/crags";

export const getAllCrags = async (_req: Request, res: Response) => {
  try {
    const rows = await selectAllCrags();

    res.status(200)
      .json(rows);
  }
  catch (e) {
    console.log("Exception in getAllCrags", e.message);

    res.status(500)
      .send(e.message);
  }
};

export const addCrag = async (req: Request, res: Response) => {
  try {
    await insertCrag(req.body);

    res.status(200)
      .send();
  }
  catch (e) {
    console.log("Exception in addCrag", e.message);

    res.status(500)
      .send(e.message);
  }
};
