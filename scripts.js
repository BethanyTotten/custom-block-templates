const myStoreAPI = "rQr8R272KK0cBKKA4KCyeOWcv1U";
const myShopDomain = "tapcart-jakes-qa-teststore-10.myshopify.com";

const shopDomain = "drmtlgy.myshopify.com";
const privateApiToken = "2RD9RAKJ1HH-s2-eFcdZsswGWxs";
const publicToken = "_fF7OK5elUgXPzICRKveFHDL7F4";
const storeURI = `https://judge.me/api/v1/reviews?api_token=${privateApiToken}&shop_domain=${shopDomain}&accept=application/json`;

const needleLessSerumExternalID = 7773270145;

const cachedURI = `https://cache.judge.me/widgets/shopify/${shopDomain}?public_token=${publicToken}&all_reviews_page=1`;

const getReviews = async () => {
  // let dataObject = {product: {}, reviews: {}}
  console.log("*** FETCHING 1 PRODUCT - Needless Serum ***");

  const fetchProductURI = `https://judge.me/api/v1/products/-1?api_token=${privateApiToken}&shop_domain=${shopDomain}&handle=needle-less-serum`;

  const fetchedProductResponse = await fetch(fetchProductURI);
  let productData = await fetchedProductResponse.json();
  console.log(productData);

  console.log("");
  console.log("*** FETCHING REVIEWS by product ID - Needless Serum ***");

  const needlessSerumURI = `https://judge.me/api/v1/reviews?api_token=2RD9RAKJ1HH-s2-eFcdZsswGWxs&shop_domain=drmtlgy.myshopify.com&product_id=30468863`;

  const needlessSerumResponse = await fetch(needlessSerumURI);
  // console.log(needlessSerumResponse)
  let needleLessSerumData = await needlessSerumResponse.json();
  console.log(needleLessSerumData);

  const ratings5URI = `https://judge.me/api/v1/reviews/count?api_token=2RD9RAKJ1HH-s2-eFcdZsswGWxs&shop_domain=drmtlgy.myshopify.com&product_id=30468863&rating=5`;

  const ratings4URI = `https://judge.me/api/v1/reviews/count?api_token=2RD9RAKJ1HH-s2-eFcdZsswGWxs&shop_domain=drmtlgy.myshopify.com&product_id=30468863&rating=4`;

  const ratings3URI = `https://judge.me/api/v1/reviews/count?api_token=2RD9RAKJ1HH-s2-eFcdZsswGWxs&shop_domain=drmtlgy.myshopify.com&product_id=30468863&rating=3`;

  const ratings2URI = `https://judge.me/api/v1/reviews/count?api_token=2RD9RAKJ1HH-s2-eFcdZsswGWxs&shop_domain=drmtlgy.myshopify.com&product_id=30468863&rating=2`;

  const ratings1URI = `https://judge.me/api/v1/reviews/count?api_token=2RD9RAKJ1HH-s2-eFcdZsswGWxs&shop_domain=drmtlgy.myshopify.com&product_id=30468863&rating=1`;

  const ratings5Response = await fetch(ratings5URI);
  const ratings4Response = await fetch(ratings4URI);
  const ratings3Response = await fetch(ratings3URI);
  const ratings2Response = await fetch(ratings2URI);
  const ratings1Response = await fetch(ratings1URI);

  console.log("");
  console.log("*** FETCHING RATINGS ***");
  const ratings5 = await ratings5Response.json();
  const ratings4 = await ratings4Response.json();
  const ratings3 = await ratings3Response.json();
  const ratings2 = await ratings2Response.json();
  const ratings1 = await ratings1Response.json();
  console.log(ratings5, ratings4, ratings3, ratings2, ratings1);


  console.log("");
  console.log("*** FETCHING AVERAGE REVIEW RATING ***");

  const averageRatingURI = `https://judge.me/api/v1/widgets/all_reviews_rating?api_token=2RD9RAKJ1HH-s2-eFcdZsswGWxs&shop_domain=drmtlgy.myshopify.com`

  const averageRatingResponse = await fetch(averageRatingURI)
  const averageRatingDataObj = await averageRatingResponse.json()
  const averageRatingString = averageRatingDataObj.all_reviews_rating
  console.log(averageRatingString)
  const averageRatingData = parseFloat(averageRatingString)
  console.log(averageRatingData)
  const averageRatingRounded = Math.round(averageRatingData * 10) / 10
  console.log(averageRatingRounded)

  console.log("");
  console.log("*** FETCHING ALL REVIEWS ***");

  const response = await fetch(storeURI);
  // console.log(response);
  let data = await response.json();
  console.log(data);

  // This enpoint returns a widget based on a handle
  // console.log("");
  // console.log("*** WIDGET by Hanle - Needleless Serum ***");
  // console.log("Handle - Neeleless Serum - WIDGET");

  // const needleLessWidgetURI = `https://judge.me/api/v1/widgets/product_review?api_token=2RD9RAKJ1HH-s2-eFcdZsswGWxs&shop_domain=drmtlgy.myshopify.com&handle=needle-less-serum`;

  // const needleLessWidgetResponse = await fetch(needleLessWidgetURI);
  // // console.log(needleLessWidgetResponse);

  // // Response is an object with the html of the widget
  // const needleLessWidgetData = await needleLessWidgetResponse.json();
  // console.log(needleLessWidgetData);

  // const dataAverageRating = needleLessWidgetData.widget.split(
  //   "data-average-rating="
  // );

  // console.log("*** THE SPLIT ***")
  // console.log(dataAverageRating);
  // console.log(needleLessWidgetData)

  var myTemplate = $("#reviewCarousel").html();
  var compiled = Handlebars.compile(myTemplate);

  let dataObject = {
    product_obj: productData,
    reviews_obj: needleLessSerumData,
    average_rating: averageRatingRounded,
    ratings: {
      five: ratings5.count,
      four: ratings4.count,
      three: ratings3.count,
      two: ratings2.count,
      one: ratings1.count,
    },
  };

  console.log("");
  console.log("*** FULL DATA OBJECT ***");
  console.log(dataObject);

  $("#codeblock").html(compiled(dataObject));
  // $("#codeblock").html(compiled(needleLessWidgetData));
  // $("#codeblock").html(compiled(needleLessSerumData));
  // $("#codeblock").html(compiled(productData));
};

getReviews();
