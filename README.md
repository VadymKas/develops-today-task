This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Front-end JS engineer test assessment - the Car Dealer App

### Overview

This documentation outlines the steps required to complete the test assessment for creating a car dealer application using Next.js. The application will allow users to filter vehicles by type and model year, and view the results on a separate page.

## Steps to Complete the Assessment

### 1. Create a Next.js Application

### 2. Create a Filter Page

1. **Design the Filter Page:**
   - It should be the home page of the app
   - Use Tailwind CSS to style the page.
   - You can design and style the components as you want
2. **Add Vehicle Type and Model Year Selectors:**
   - Fetch vehicle types using the endpoint:
     ```
     <https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json>
     ```
   - Populate a dropdown selector with the fetched vehicle types.
   - Create another dropdown selector for model years ranging from 2015 to the current year.
3. **Enable the "Next" Button:**
   - Add a "Next" navigation button that is initially disabled.
   - Use Link component
   - Enable the button only when a vehicle type and model year are selected.
4. **Navigate to the Result Page:**
   - On clicking the "Next", navigate to the route `result/[makeId]/[year]`.

### 3. Create the Result Page

1. **Implement `generateStaticParams`:**
   - Define the `generateStaticParams` function to generate static paths for the result pages.
   - Fetch the necessary data to determine the paths to be pre-rendered.
2. **Fetch Vehicle Data:**
   - On the result page, get the vehicle type and model year from the params
   - Use the following endpoint to fetch the vehicle models by make ID and model year:
     ```
     <https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json>

     ```
3. **Render Vehicle Models:**
   - Display the fetched vehicle models using Tailwind CSS for styling.
   - Implement error handling for any data fetching issues.

### 4. Implement Suspense Component

- Use React's `Suspense` component to handle loading states where applicable.
- Consider using `Suspense` for data fetching and component loading.

### 5. Implement UI with Tailwind CSS

- Ensure all components and pages are styled using Tailwind CSS.
- Follow best practices for responsive design and accessibility.

### 6. Add Configuration and Documentation

1. **Environment Variables:**
   - Create a `.env.local` file in the root directory to store environment variables. Add it to the repository.
2. **Setup ESLint and Prettier:**
   - Add ESLint and Prettier to maintain code quality and consistency.
   - Configure `.eslintrc.js` and `.prettierrc` files according to project standards.
3. **Create a README File:**
   - Include instructions on how to run and build the application.
   - Provide an overview of the application's features and architecture.

### Additional Resources

- **API Documentation:** [VPIC API Documentation](https://vpic.nhtsa.dot.gov/api/?ref=public_apis)
- **Next.js Documentation:** [Next.js Docs](https://nextjs.org/docs)
- **Tailwind CSS Documentation:** [Tailwind CSS Docs](https://tailwindcss.com/docs)
- **React Suspense Documentation:** [React Suspense](https://react.dev/reference/react/Suspense)

## Getting Started

## Available Scripts

Before starting the project you need to install all dependencies:

### `npm install .`

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
