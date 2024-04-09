import { createDirectus, authentication, rest } from '@directus/sdk';

const directus = createDirectus('https://api.meupixel.com.br')
    .with(authentication("cookie", {credentials: "include", autoRefresh: true}))
    .with(rest());

export default directus;
