## Welcome to Pokehub.

To view a hosted version, visit [Pokehub](https://pokehub-silk.vercel.app/).
To run the project locally, see below. 


## Prerequisites
    * Github account
    * Create OAuth app on github
        * settings ->
        * developer settings ->
        * OAuth app -> 
        * new OAuth app -> 
        * set authorization callback url to localhost:3000/api/auth 
    * Host a postgres database of own choice e.g in heroku or elephantsql 
    * Node

## Getting Started

To install the project run:

```bash
git clone https://github.com/Rokkenrolli/pokehub.git
npm install
```

create .env file and add following variables:
```
DATABASE_URL=""
GITHUB_ID=your OAuth clientid
GITHUB_SECRET=your OAuth clientsecret
NEXTAUTH_URL=http://localhost:3000/api/auth
```

To  create db tables:
``` bash
npx prisma db push
npx prisma generate
``` 

Start development server:

```bash
npm run dev
```

You should now have working version on [localhost](http://localhost:3000)

