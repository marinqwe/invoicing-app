### Invoicing solutions using React/Apollo+GraphQL/Node/Prisma


Add variables.env to backend folder
```

FRONTEND_URL="http://localhost:<YOUR_PORT>"
PRISMA_ENDPOINT="https://eu1.prisma.sh/<PRISMA_ENDPOINT>"
PRISMA_SECRET="<PRISMA_SECRET>"
APP_SECRET="<APP_SECRET>"
PORT=<BACKEND_PORT>


```

Add config.js to frontend folder

```

export const endpoint = `http://localhost:<BACKEND_PORT>`;
export const perPage = 20; //number of items shown per page

```




```
**npm run start** on backend 

&&

**npm run dev** on frontend
```

