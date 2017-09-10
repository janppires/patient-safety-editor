describe("categories controller", function() {
  beforeEach(() => {
    jest.resetModules();
  });

  test("gets all categories", async () => {
    // Arrange
    const allCategories = [{ name: "random name" }];
    prepareResolvedCategoryModelMock(allCategories);

    // Act
    const req = {};
    const res = { json: jest.fn(), end: jest.fn() };
    const CategoriesCtrl = require("controllers/categories.controller");
    await CategoriesCtrl.getAll(req, res);

    // Assert
    const CategoryModel = require("models/category");
    expect(CategoryModel.findAndSort).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith([{ name: "random name" }]);
  });

  test("get category by id", async () => {
    // Arrange
    const categoryMock = { name: "random name" };
    prepareResolvedCategoryModelMock(categoryMock);

    // Act
    const req = { params: { categoryId: 50 } };
    const res = { json: jest.fn(), end: jest.fn() };
    const CategoriesCtrl = require("controllers/categories.controller");
    await CategoriesCtrl.get(req, res);

    // Assert
    const CategoryModel = require("models/category");
    expect(CategoryModel.findById).toHaveBeenCalledWith(50);
    expect(res.json).toHaveBeenCalledWith({ name: "random name" });
  });

  test("creates new category", async () => {
    // Arrange
    const categoryMock = { name: "random name" };
    prepareResolvedCategoryModelMock(categoryMock);

    // Act
    const req = { body: { category: { name: "new name" } } };
    const res = { json: jest.fn(), end: jest.fn() };
    const CategoriesCtrl = require("controllers/categories.controller");
    await CategoriesCtrl.create(req, res);

    // Assert
    const CategoryModel = require("models/category");
    expect(CategoryModel.create).toHaveBeenCalledWith({
      category: { name: "new name" }
    });
    expect(res.json).toHaveBeenCalledWith({ name: "random name" });
  });
});

const prepareResolvedCategoryModelMock = mockedData => {
  jest.doMock("models/category", () => {
    const findAndSort = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(mockedData);
        })
    );
    const findById = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(mockedData);
        })
    );
    const create = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(mockedData);
        })
    );
    return { findAndSort, findById, create };
  });
};
