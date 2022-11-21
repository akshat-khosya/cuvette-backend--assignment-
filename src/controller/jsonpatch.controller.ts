import { Request, Response } from "express"
import jsonpatch from "jsonpatch"
import log from "../lib/logger";


const jsonPatchHandler = (req: Request, res: Response) => {
    const { doc, patch } = req.body;
    try {
        const patchedDoc = jsonpatch.apply_patch(doc, patch);
        res.status(200).json({ patchedDoc });
    } catch (error) {
        log.error(error);
        res.status(400).json({ error: (error as Error).message });
    }

}

export { jsonPatchHandler }