1. Install bun in Windows using 
    => powershell -c "irm bun.sh/install.ps1 | iex"
    => bun --version [Check version]

2. Initialize the project with
    => bunx create-turbo@latest
    => Choose path as . & bun as environment

3. Deleted Inside apps folder content.

4. Create a folder as primary_backend in apps folder.

5. Now inside apps/primary_backend 
    => bun init 
    => choose blank

6. In apps folder create a api_backend folder.

7. Run => bun init & choose blank

8. In apps folder create a dashboard_frontend folder.

9. Run => bun init & choose react and choose taliwindcss with shadcn.

10. Go to packages folder and craete a database folder and Run :
    => bun init & choose blank

11. Setup bun with Prisma, Run :
    => bun add -d prisma @types/pg
       bun add @prisma/client @prisma/adapter-pg pg

12. Initialize prisma in Database folder
    => bunx prisma init

13. Design the DB Schema in prisma.

14. Start with primary backend to code ,

    => remove old primary_backend : rm -r primary_backend 
    => Run : bun create elysia app inside apps folder
    => It create app folder now move these by , : mv app Primary_backend

15. Now create a modules folder inside create auth, apiKeys, models, payments folder.

16. Code in auth app craete models.ts file and code schema.

17. Now code index.ts what we created in models.ts

18. Bind the changes in index.js file at src => index.ts

19. Now create a DB , use Neon DB get the connection string

20. Run the command :
    => Setup DB Connection in .env file.
    => bun add dotenv
    => bunx --bun prisma migrate dev --name init
    => bunx --bun prisma generate 

21. Inside Database folder => index.ts write => code for Prisma apapter.

22. Inside Database folder => Package.json file add exports & add changes in primary_backend package.json as database with *

23. Run bun install in root level as openRouter

25. Setup the signup route.

26. Now code for siginin code with setup as jwt. [primary_backend]
    => bun add @elysiajs/jwt

27. 