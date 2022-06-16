const shopDomain = "tapcart-jakes-qa-teststore-10.myshopify.com";
const apiToken = "rQr8R272KK0cBKKA4KCyeOWcv1U";
const publicToken = "_fF7OK5elUgXPzICRKveFHDL7F4"
const storeURI = `https://judge.me/api/v1/reviews?api_token=${apiToken}&shop_domain=${shopDomain}&accept=application/json`;
const cachedURI = `https://cache.judge.me/widgets/shopify/${shopDomain}?public_token=${publicToken}&all_reviews_page=1`


const headers = {
  //   method: "GET",
  shop_domain: "tapcart-jakes-qa-teststore-10.myshopify.com",
  accept: "application/json",
  api_token: "rQr8R272KK0cBKKA4KCyeOWcv1U",
  //   mode: "cors",
};

const getReviews = async () => {
  console.log("Fetching Reviews");
  const response = await fetch(cachedURI);
  console.log(response);
  const data = await response.json();
  console.log(data)
};

getReviews();

// fetch(storeURI, headers)
//   .then((response) => {
//     response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//   const api_url = "https://reqres.in/api/users"

// const getUsers = async () => {
//     const response = await fetch(api_url);
//     console.log(response)
//     const data = await response.json();
//     console.log(data)
//     console.log("Working")
// }

// getUsers()
