Welcome to Pokehub.

To view a working version without account database and thus without features such as favouriting, visit [https://pokehub-silk.vercel.app/](Pokehub)
To gain access to all functions, or run the project locally, see below. 


## Prerequisites
    * Github account
    * Create OAuth app on github
        * settings
        * developer settings
        * OAuth app
        * new OAuth app
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
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_URL=http://localhost:3000/api/auth
```

To  create db tables,use
``` bash
npx prisma db push
npx prisma generate
``` 

First, run the development server:

```bash
npm run dev
```

You should now have working version on [http://localhost:3000](localhost)

