    const express = require("express");
    const router = express.Router({ mergeParams: true }); // mergeParams needed to access :id from parent route
    const Listing = require("../models/listing.js");
    const Review = require("../models/review.js");
    const wrapAsync = require("../utils/wrapAsync.js");
    const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
    const reviewController = require("../controllers/reviews.js");

    

    // POST: Create new review
    router.post("/", validateReview, isLoggedIn, wrapAsync(reviewController.createReview));

    // DELETE: Delete a review
    router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

    module.exports = router;
