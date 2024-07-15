const Listing = require("../models/listings");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListings = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");
    let response = await geocodingClient
        .forwardGeocode({
            query: listing.location,
            limit: 1,
        })
        .send();
    listing.geometry = response.body.features[0].geometry;
    if (!listing) {
        req.flash("error", "Listing does not Exist !");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};

module.exports.createNewListing = async (req, res, next) => {
    if (!req.body.listing) {
        throw new expressError(400, "Send valid data for Listing");
    }
    let response = await geocodingClient
        .forwardGeocode({
            query: req.body.listing.location,
            limit: 1,
        })
        .send();

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = response.body.features[0].geometry;
    await newListing.save();
    req.flash("success", "New Listing Created !");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing does not Exist !");
        res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace(
        "/upload",
        "/upload/w_300,h_250"
    );

    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListings = async (req, res) => {
    if (!req.body.listing) {
        throw new expressError(400, "Send valid data for Listing");
    }
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated Successfully!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted Succesfully!");
    res.redirect("/listings");
};
