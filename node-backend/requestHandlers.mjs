export default function RequestHandlers(requestModel) {
  async function handlePostRequest(req, res) {
    const newRequest = req.body;
    await requestModel.create(newRequest);
    res.status(201).json(newRequest);
  }

  async function handleGetAllRequests(_req, res) {
    const requests = await requestModel.findAll();
    res.status(200).json(requests);
  }

  return {
    handlePostRequest,
    handleGetAllRequests,
  };
}
