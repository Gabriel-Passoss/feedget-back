
# Feedget Back-end

The server of the feedback widget, where it can be placed on any website to receive user feedback

## Functionalities

- Store in the database of feedbacks received
- Send an email to the website owner notifying them that new feedback has been received
- Automated tests
## Used Stack

**Back-end:** TypeScript, Node.JS, Express, Cors, Jest, Nodemailer


## Running locally

Clone the project

```bash
  git clone https://github.com/Gabriel-Passoss/feedget-back.git
```

Enter the project directory

```bash
  cd feedget-back
```

Install the dependencies

```bash
  npm install
```

Launch the app

```bash
  npm run dev
```


## Environment variables

To run this project, you will need to add the following environment variables to your .env

`DATABASE_URL`