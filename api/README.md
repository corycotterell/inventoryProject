# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
- First The database is going to query over all the data
- Its going to find just the oil ids for all the user ids that match the first colum
- I need a way to count how many times each of those elements occur.
- I also need to send back the oil information for each one of those values that has a number associated with how many times it occured.