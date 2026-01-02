import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageCards extends Struct.ComponentSchema {
  collectionName: 'components_homepage_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCsr extends Struct.ComponentSchema {
  collectionName: 'components_homepage_csrs';
  info: {
    displayName: 'CSR';
  };
  attributes: {
    sectionData: Schema.Attribute.Component<'homepage.section', false>;
    subheading: Schema.Attribute.Text;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    heading: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    subheading: Schema.Attribute.RichText;
  };
}

export interface HomepageLife extends Struct.ComponentSchema {
  collectionName: 'components_homepage_lives';
  info: {
    displayName: 'Life';
  };
  attributes: {
    sectionData: Schema.Attribute.Component<'homepage.section', false>;
  };
}

export interface HomepageNews extends Struct.ComponentSchema {
  collectionName: 'components_homepage_news';
  info: {
    displayName: 'News';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.news-card', true>;
    titile: Schema.Attribute.String;
  };
}

export interface HomepageOurBusiness extends Struct.ComponentSchema {
  collectionName: 'components_homepage_our_businesses';
  info: {
    displayName: 'Our Business';
  };
  attributes: {
    sectionData: Schema.Attribute.Component<'homepage.section', false>;
  };
}

export interface HomepageOurPurpose extends Struct.ComponentSchema {
  collectionName: 'components_homepage_our_purposes';
  info: {
    displayName: 'Our Purpose';
  };
  attributes: {
    cards: Schema.Attribute.Component<'homepage.cards', true>;
    sectionData: Schema.Attribute.Component<'homepage.section', false>;
  };
}

export interface HomepageOurStory extends Struct.ComponentSchema {
  collectionName: 'components_homepage_our_stories';
  info: {
    displayName: 'Our Story';
  };
  attributes: {
    sectionData: Schema.Attribute.Component<'homepage.section', false>;
  };
}

export interface HomepageOverView extends Struct.ComponentSchema {
  collectionName: 'components_homepage_over_views';
  info: {
    displayName: 'overView';
  };
  attributes: {
    sectionData: Schema.Attribute.Component<'homepage.section', false>;
    stats: Schema.Attribute.Component<'homepage.stats', true>;
  };
}

export interface HomepageSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    paragraphs: Schema.Attribute.RichText;
  };
}

export interface HomepageStats extends Struct.ComponentSchema {
  collectionName: 'components_homepage_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface HomepageSustainability extends Struct.ComponentSchema {
  collectionName: 'components_homepage_sustainabilities';
  info: {
    displayName: 'Sustainability';
  };
  attributes: {
    sectionData: Schema.Attribute.Component<'homepage.section', false>;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Know More'>;
  };
}

export interface SharedNewsCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_news_cards';
  info: {
    displayName: 'NEWS Card';
  };
  attributes: {
    circleInner: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'shared.cta', false>;
    date: Schema.Attribute.String;
    headline: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.cards': HomepageCards;
      'homepage.csr': HomepageCsr;
      'homepage.hero': HomepageHero;
      'homepage.life': HomepageLife;
      'homepage.news': HomepageNews;
      'homepage.our-business': HomepageOurBusiness;
      'homepage.our-purpose': HomepageOurPurpose;
      'homepage.our-story': HomepageOurStory;
      'homepage.over-view': HomepageOverView;
      'homepage.section': HomepageSection;
      'homepage.stats': HomepageStats;
      'homepage.sustainability': HomepageSustainability;
      'shared.cta': SharedCta;
      'shared.news-card': SharedNewsCard;
    }
  }
}
