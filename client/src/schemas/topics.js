import { schema } from "normalizr";

const topic = new schema.Entity("topics", {}, { idAttribute: "_id" });

export const topicsSchema = [topic];
