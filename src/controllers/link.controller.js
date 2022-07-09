const LinkService = require("./../services/link.service");
const response = require("./../utils/response");

class LinkContoller {
  async create(req, res) {
    const result = await LinkService.create(req.body);
    res.status(200).send(response("Link created", result));
  }

  async getAll(req, res) {
    const result = await LinkService.getAll();
    res.status(200).send(response("All links", result));
  }

  async getOne(req, res) {
    const result = await LinkService.getOne(req.params.linkId);
    res.status(200).send(response("Link data", result));
  }

  async update(req, res) {
    const result = await LinkService.update(req.params.linkId, req.body);
    res.status(200).send(response("Link updated", result));
  }

  async useLink(req, res) {
    const result = await LinkService.useLink(req.params.linkId);
    // res.status(200).send(response("Link used", result));
    if (result.password) {
      res.send("Password protected");
    }

    // Redirect to the link
    res.redirect(result.url);
  }

  async delete(req, res) {
    const result = await LinkService.delete(req.params.linkId);
    res.status(200).send(response("Link deleted", result));
  }
}

module.exports = new LinkContoller();
