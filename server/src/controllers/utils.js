export const handleError = res => {
  return err => {
    res.status(500).send({
      status: 500,
      message: "internal error",
      type: "internal",
      details: err.message
    });
  };
};
