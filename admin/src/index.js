import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import getTrad from './utils/getTrad'

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
    app.customFields.register({
      name: "image-preview",
      pluginId: "imagepreview", // the custom field is created by a color-picker plugin
      type: "string", // the color will be stored as a string
      intlLabel: {
        id: getTrad("image-preview.imagepreview.label"),
        defaultMessage: "Page Preview",
      },
      intlDescription: {
        id: getTrad("image-preview.imagepreview.description"),
        defaultMessage: "This name will appear as field name in content builder.",
      },
      components: {
        Input: async () => import("../src/components/TextField"),
      },
      options: {
      },
    });
  },

  bootstrap(app) { },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
