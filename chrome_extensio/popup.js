// Initialize popup
document.addEventListener('DOMContentLoaded', () => {
  const statusMessages = document.getElementById('status-messages');
  const chartContainer = document.getElementById('chartContainer');

  const addStatusMessage = (message) => {
    const div = document.createElement('div');
    div.textContent = message;
    statusMessages.appendChild(div);
  };

  addStatusMessage('✔️ Extension is active');
  addStatusMessage('✔️ Ready to analyze products');

  // Dynamically load PriceData.js
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('PriceData.js');
  document.head.appendChild(script);

  script.onload = () => {
    console.log('[RealDeal] PriceData.js loaded successfully.');

    // Request product ID from content script
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { type: 'REQUEST_PRODUCT_ID' },
        function(response) {
          if (response && response.type === 'PRODUCT_ID') {
            const productId = response.productId;
            console.log(`[RealDeal] Received Product ID: ${productId}`);

            // Fetch price data for the product
            const productData = productPriceData[productId];
            if (!productData) {
              console.error(`[RealDeal] No price data found for product: ${productId}`);
              chartContainer.innerHTML = `<p style="color: red;">No price data available for this product.</p>`;
              return;
            }

            const { name, prices } = productData;
            const priceValues = prices.map(row => row.price);
            const labels = prices.map(row => row.month);

            // Load Highcharts from local extension files
            const highchartsScript = document.createElement('script');
            highchartsScript.src = chrome.runtime.getURL('libs/highcharts.js');
            document.head.appendChild(highchartsScript);

            highchartsScript.onload = () => {
              Highcharts.chart(chartContainer, {
                chart: { type: 'line' },
                title: { text: `Price History for ${name}` },
                xAxis: { categories: labels, title: { text: 'Months' } },
                yAxis: { title: { text: 'Price (₹)' } },
                series: [{ name: 'Price', data: priceValues, color: '#1976d2' }],
                tooltip: { valuePrefix: '₹' }
              });
            };

            highchartsScript.onerror = () => {
              console.error('[RealDeal] Error loading Highcharts locally.');
            };
          }
        }
      );
    });

    // Default message if no product ID is received
    addStatusMessage('⚠️ Waiting for product data...');
  };

  script.onerror = () => {
    console.error('[RealDeal] Error loading PriceData.js.');
  };
});
