const puppeteer = require('puppeteer');

async function convertHtmlToImage(htmlContent, outputFilePath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(htmlContent);

  await page.screenshot({ path: outputFilePath });

  await browser.close();
}

const htmlContent = `
 <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f9;
        margin: 0;
        padding: 0;
        text-align: center;
      }

      h1 {
        color: #ff6347;
        font-size: 36px;
        margin-top: 20px;
        animation: fadeIn 1s ease-in;
      }

      .content {
        padding: 20px;
      }

     
      .avatar img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 5px solid #ff6347;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }

      .avatar img:hover {
        transform: scale(1.1);
      }

      p {
        font-size: 18px;
        color: #333;
        line-height: 1.5;
        margin-top: 20px;
      }

      ul {
        list-style-type: none;
        padding: 0;
        font-size: 18px;
        color: #555;
      }

      ul li {
        margin: 10px 0;
      }

     
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  </head>
  <body>
    <div class="content">
      <h1>Bounties Warpcast!</h1>
      <p>Welcome to the exciting world of bounties on Warpcast. Here you can find challenges, tasks, and rewards.</p>

      <!-- Imagen tipo avatar redonda -->
      <div class="avatar">
        <img src="https://wrpcd.net/cdn-cgi/image/anim=false,fit=contain,f=auto,w=336/https%3A%2F%2Fi.imgur.com%2FOHMozjv.jpg" alt="Exciting Bounties" />
      </div>

      <p>Get ready to complete tasks and earn rewards! Here are some of the most popular categories:</p>
      <ul>
        <li>Web Development</li>
        <li>Design and Creativity</li>
        <li>Blockchain and Crypto</li>
        <li>Data Science</li>
        <li>Community Engagement</li>
      </ul>
    </div>
  </body>
</html>

`;

const outputFilePath = 'output.png';

convertHtmlToImage(htmlContent, outputFilePath).then(() => {
  console.log('Image saved as', outputFilePath);
});
