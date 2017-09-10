import { schema } from "normalizr";

const category = new schema.Entity("categories", {}, { idAttribute: "_id" });

export const categoriesSchema = [category];
