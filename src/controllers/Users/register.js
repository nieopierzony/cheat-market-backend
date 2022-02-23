export default async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    throw new Error('Test error');
  } catch (err) {
    return next(err);
  }
};
