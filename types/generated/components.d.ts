import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface TutorialStep extends Struct.ComponentSchema {
  collectionName: 'components_tutorial_steps';
  info: {
    description: 'A single step within a tutorial slider';
    displayName: 'Step';
    icon: 'check';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    subtext: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'tutorial.step': TutorialStep;
    }
  }
}
