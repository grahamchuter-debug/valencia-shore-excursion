/**
 * Featured-tour helpers — Editor's Choice flagship used for homepage cards / schema.
 */
import { getBookableProduct } from "@/data/bookable-products";

const flagship = getBookableProduct("valencia-highlights-city-of-arts");

export const featuredTour = flagship
  ? {
      slug: flagship.slug,
      path: flagship.path,
      bookingPath: flagship.bookingPath,
      cardName: flagship.name,
      fullName: flagship.experienceName,
    }
  : {
      slug: "valencia-highlights-city-of-arts",
      path: "/shore-excursions/valencia-highlights-city-of-arts",
      bookingPath: "/book/valencia-highlights-city-of-arts",
      cardName: "Valencia Highlights & City of Arts",
      fullName: "Valencia Highlights & City of Arts and Sciences",
    };
