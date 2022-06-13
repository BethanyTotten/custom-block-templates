const productRecommendationsSection = document.querySelector('.product-recommendations');

fetch(window.Shopify.routes.root + "recommendations/products?product_id=12345690123&limit=4&section_id=product-recommendations")
 .then(response => response.text())
 .then((text) => {
    const html = document.createElement('div');
    html.innerHTML = text;
    const recommendations = html.querySelector('.product-recommendations');

    if (recommendations && recommendations.innerHTML.trim().length) {
      productRecommendationsSection.innerHTML = recommendations.innerHTML;
    }
 });



