export default function RequestHandlers(requestModel) {
  async function handlePostRequest(req, res) {
    const newRequest = req.body;
    await requestModel.create(newRequest);
    res.status(201).json(newRequest);
  }

  return {
    handlePostRequest,
  };
}
