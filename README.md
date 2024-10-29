# Cryptocurrency Table Application

This is a responsive cryptocurrency table application built with **React + Vite**, styled with **Tailwind CSS**, and using **Axios** to fetch cryptocurrency data from the CoinLore API. The application displays cryptocurrency information with pagination and adapts to both desktop and mobile views.

<img width="1679" alt="Crypto Table Screenshot" src="https://github.com/user-attachments/assets/dc80e658-3421-4708-b4fe-674011a29f55">


## Features

- Responsive layout with table view for larger screens and card view for smaller screens.
- Pagination with 10 items per page.
- Fetches cryptocurrency data from the CoinLore API `/tickers` endpoint.

## Prerequisites

- **Node.js** (v14 or later)
- **npm** or **yarn**

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine.

```bash
git clone https://github.com/osoko-korede/crypto-table.git
cd crypto-table
```

### 2. Install Dependencies

Navigate to the project directory and install dependencies.

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Set Up Tailwind CSS

Tailwind CSS should already be configured in this project. For reference, you can find the Tailwind CSS configuration in `tailwind.config.js` and `postcss.config.js`.

### 4. Run the Application Locally

To start the development server, use the following command:

```bash
# Using npm
npm run dev

# Or using yarn
yarn run dev
```

The application should now be running at `http://localhost:5173/`.

### 5. Build the Application for Production

To create an optimized production build, use the following command:

```bash
# Using npm
npm run build

# Or using yarn
yarn build
```

This command will generate a production-ready build of the application in the `build` directory.

### 6. Deploying the Application

#### Vercel (Recommended for React Apps)

1. Install the **Vercel CLI** (optional but recommended for ease of deployment):

   ```bash
   npm install -g vercel
   ```

2. In the project root directory, deploy the app using:

   ```bash
   vercel
   ```

3. Follow the prompts to complete the deployment.

#### Other Hosting Platforms

You can also deploy the production build to other platforms, such as **Netlify**, **Firebase Hosting**, **Heroku**, or **GitHub Pages**. The build output will be in the `build` folder.

## Folder Structure

```
crypto-table/
├── src/
│   ├── components/
│   │   └── CryptoTable.js    # Main component displaying the cryptocurrency data
│   ├── App.js                # Entry point of the React app
│   ├── index.js              # Main file to render the app
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration for Tailwind CSS
└── README.md                 # Documentation file
```

## Dependencies

- **React** - JavaScript library for building user interfaces.
- **Axios** - For making HTTP requests to fetch data from the CoinLore API.
- **Tailwind CSS** - Utility-first CSS framework for styling.

## License

This project is open-source and available under the [MIT License](LICENSE).
