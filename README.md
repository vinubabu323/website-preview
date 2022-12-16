# Web Page Preview - Strapi Plugin

  

Web Page Preview plugin is used to view a web page through a custom field in strapi. This plugin helps to give a live preview the page we are editing.

  

## Getting Started

  

The plugin can be used in strapi version above 4.4 (versions that support custom fields).

### To Install

>

1. Go into your strapi project.

2. Run the npm command ```npm i strapi-plugin-website-preview```

3. The plugin will be added to your strapi project.

>

Inorder to achieve the url of the website developing it must be specified in the .env file as FRONT_END_URL. This url need to be the base url of the website.

  

### Adding & Accessing URL

>

1. Add this to the ```FRONT_END_URL="YOUR_BASE_URL_HERE"``` .env file of your project.

2. Add ```webpack.config.js``` file into **/src/admin** of your project and paste this content there.

>

```

// ./src/admin/webpack.config.js

'use strict';

module.exports = (config, webpack) => {

// Note: we provide webpack above so you should not `require` it

// Perform customizations to webpack config

// Important: return the modified config

config.plugins.push(

new webpack.DefinePlugin({

FRONT_END_URL: JSON.stringify(process.env.FRONT_END_URL),

})

)

return config;

};

```

  

This file is added in order to access the FRONT_END_URL in the plugin.

  

## How To Use

>

1. Create a new field form a content type.

2. Select custom fields.

3. **Page Preview** field will appear there.

4. Select this field and name it accordingly ("page_preview" is used commonly for more understanding) and save.

5. Select the content type from the content manager.

6. Add end point of the page in the **page_preview** field and save.

7. Click on the preview button then the page will be pop up.

>