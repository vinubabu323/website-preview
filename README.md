### Getting Started

The plugin can be used in strapi version above 4.4 (versions that support custom fields).

### To Install

1. Go into your strapi project.

2. Run the npm command `npm i strapi-plugin-website-preview or yarn add strapi-plugin-website-preview`

3. The plugin will be added to your strapi project.

Inorder to achieve the url of the website developing it must be specified in the .env file as STRAPI_ADMIN_FRONT_END_URL. This url need to be the base url of the website.

#### Adding & Accessing URL

4. Add this to the `STRAPI_ADMIN_FRONT_END_URL="YOUR_BASE_URL_HERE"` .env file of your project.

5. Run the command `npm build or yarn build`

### How To Use

1. Create a new field form a content type.

2. Select custom fields.

3. **Page Preview** field will appear there.

4. Select this field and name it accordingly ("page_preview" is used commonly for more understanding) and save.

5. Select the content type from the content manager.

6. Add end point of the page in the **page_preview** field and save.

7. Click on the preview button then the page will be pop up.

### How To Add URL

To Add an external url you will need to alter the **middleware.js** file as follows.

Add this code into **config/middlewares.js**

```
module.exports  = [
    'strapi::errors',
    {
        name:  "strapi::security",
        config:  {
           contentSecurityPolicy:  {
           useDefaults:  true,
           directives:  {
             'frame-src':["'self'","https://www.wikipedia.org/"],
             'frame-ancestors':  null,
             upgradeInsecureRequests:  null,
                                   },
                          },
       frameguard:  false,
                 },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
```
