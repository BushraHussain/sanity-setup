
## Step 1: Create Next js app

npx create-next-app

## Step 2: Install & setup sanity

npm create sanity@latest -- --template clean --create-project "Sanity Project" --dataset production

Above command will take you through a setup process by guiding you through the following steps:

1. Create an account. Select a login provider from the list of options, and confirm with Enter. After creating an account in the browser, come back to the command line window.

2. It will ask you the following questions.

Would you like to add configuration files for a Sanity project in this Next.js folder? Yes
Would you like an embedded Sanity Studio? Yes
Would you like to use the Next.js app directory for routes? Yes
What route do you want to use for the Studio? /studio
Select project template to use Clean project with no predefined schemas
Would you like to add the project ID and dataset to your .env file? Yes

3. Wait a bit for the installation process to complete. When you get a Success! message, you're good to move on to the next step!! 🎉

## Step 3: Run locally

npm run dev
