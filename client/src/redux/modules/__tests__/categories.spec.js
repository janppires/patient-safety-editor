import categoriesReducer, {
  addCategory,
  categoriesSelector,
  categorySelector
} from "redux/modules/categories";

describe("reducer: categories.byId ", () => {
  it("adds new category by id to empty state", () => {
    const category = { id: 2, name: "random name" };
    const action = addCategory(category);
    expect(categoriesReducer({}, action)).toMatchSnapshot();
  });

  it("adds new category by id to existing state", () => {
    const state = prepareState();
    const category = { id: 2, name: "random name" };
    const action = addCategory(category);
    expect(categoriesReducer(state, action)).toMatchSnapshot();
  });

  const prepareState = () => ({
    byId: {
      33: {
        id: 33,
        name: "other 33 category"
      }
    },
    list: [33]
  });
});

describe("categories selectors", () => {
  test("get categories array from state", () => {
    const state = prepareStateWithCategories();
    const categories = categoriesSelector(state);
    expect(categories).toMatchSnapshot();
  });

  test("get undefined category when categoryId is unknown", () => {
    const state = prepareStateWithCategories();
    const category = categorySelector(state);
    expect(category).toMatchSnapshot();
  });

  test("get category from id", () => {
    const state = prepareStateWithCategories();
    const categoryId = 2;
    const category = categorySelector(state, categoryId);
    expect(category).toMatchSnapshot();
  });

  const prepareStateWithCategories = () => ({
    categories: {
      list: [1, 2],
      byId: {
        1: { name: "random" },
        2: { name: "random 2" }
      }
    }
  });
});
