import { schema } from "normalizr";

const category = new schema.Entity("categories", {}, { idAttribute: "nameId" });

export const categoriesSchema = [category];
