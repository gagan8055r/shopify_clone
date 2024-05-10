const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(bodyParser.json());

const HASURA_GRAPHQL_ENDPOINT = 'http://localhost:8080/v1/graphql';
const HASURA_ADMIN_SECRET = 'mySecret';


const INSERT_USER_MUTATION = `
  mutation InsertUser($email: String!, $password: String!) {
    insert_Authentication_table_one(object: {email: $email, password: $password}) {
      id
    }
  }
`;


app.post('/auth/submit', async (req, res) => {
    const { email, password } = req.body;

    try {
        const response = await fetch(HASURA_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': HASURA_ADMIN_SECRET,
            },
            body: JSON.stringify({
                query: INSERT_USER_MUTATION,
                variables: { email, password },
            }),
        });

        const data = await response.json();
        if (data.errors) {
            throw new Error(data.errors[0].message);
        }

        res.json({ message: 'User inserted successfully' });
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
