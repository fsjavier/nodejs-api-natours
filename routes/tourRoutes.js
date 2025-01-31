const express = require("express");
const tourController = require("../controllers/tourController");

const router = express.Router();

/*
// Middleware that is no longer needed
// This ran only when the "id" param was present in the URL
router.param("id", tourController.checkID);
*/

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
