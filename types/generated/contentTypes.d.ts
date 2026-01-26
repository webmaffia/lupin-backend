import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutUsAboutUs extends Struct.SingleTypeSchema {
  collectionName: 'about_uses';
  info: {
    displayName: 'About Us';
    pluralName: 'about-uses';
    singularName: 'about-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AboutOverviewSection: Schema.Attribute.Component<
      'about-us.about-overview-card',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-us.about-us'
    > &
      Schema.Attribute.Private;
    PageIntroSection: Schema.Attribute.Component<
      'about-us.intro-section',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    RedirectSection: Schema.Attribute.Component<
      'about-us.redirect-card',
      false
    >;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAlliedBusinessAlliedBusiness
  extends Struct.SingleTypeSchema {
  collectionName: 'allied_businesses_p';
  info: {
    displayName: 'Allied Business';
    pluralName: 'allied-businesses-p';
    singularName: 'allied-business';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    business: Schema.Attribute.Component<'allied-business.business', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero: Schema.Attribute.Component<'shared.image', false>;
    intro: Schema.Attribute.Component<'allied-business.intro', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::allied-business.allied-business'
    > &
      Schema.Attribute.Private;
    lookingAhead: Schema.Attribute.Component<
      'allied-business.looking-ahead',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAnalystCoverageAnalystCoverage
  extends Struct.SingleTypeSchema {
  collectionName: 'analyst_coverages';
  info: {
    displayName: 'Analyst Coverage';
    pluralName: 'analyst-coverages';
    singularName: 'analyst-coverage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnalystCoverageSection: Schema.Attribute.Component<
      'investor.analyst-card',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::analyst-coverage.analyst-coverage'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArticleArticle extends Struct.CollectionTypeSchema {
  collectionName: 'articles';
  info: {
    displayName: 'Article';
    pluralName: 'articles';
    singularName: 'article';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Relation<'manyToOne', 'api::category.category'>;
    content: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    excerpt: Schema.Attribute.RichText;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    > &
      Schema.Attribute.Private;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Schema.Attribute.DateTime;
    publishedOn: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    video: Schema.Attribute.String;
  };
}

export interface ApiAwardRecognitionAwardRecognition
  extends Struct.SingleTypeSchema {
  collectionName: 'award_recognitions';
  info: {
    displayName: 'Award Recognition';
    pluralName: 'award-recognitions';
    singularName: 'award-recognition';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Heading: Schema.Attribute.String;
    IntroDescription: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::award-recognition.award-recognition'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBrandedEmergingMarketsBrandedEmergingMarkets
  extends Struct.SingleTypeSchema {
  collectionName: 'branded_emerging_markets_p';
  info: {
    displayName: 'Branded Emerging Markets';
    pluralName: 'branded-emerging-markets-p';
    singularName: 'branded-emerging-markets';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Component<
      'branded-emerging-markets.description',
      false
    >;
    globalInstitutionalBusiness: Schema.Attribute.Component<
      'branded-emerging-markets.global-institutional-business',
      false
    >;
    hero: Schema.Attribute.Component<'shared.image', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::branded-emerging-markets.branded-emerging-markets'
    > &
      Schema.Attribute.Private;
    markets: Schema.Attribute.Component<
      'branded-emerging-markets.markets',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'name'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCodeOfConductCodeOfConduct extends Struct.SingleTypeSchema {
  collectionName: 'code_of_conducts';
  info: {
    displayName: 'Code of Conduct';
    pluralName: 'code-of-conducts';
    singularName: 'code-of-conduct';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    DocumentSection: Schema.Attribute.Component<
      'investor.code-conduct-document-data',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::code-of-conduct.code-of-conduct'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCommitteeCommittee extends Struct.SingleTypeSchema {
  collectionName: 'committees';
  info: {
    displayName: 'Committee';
    pluralName: 'committees';
    singularName: 'committee';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::committee.committee'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCommunityCommunity extends Struct.SingleTypeSchema {
  collectionName: 'communities';
  info: {
    displayName: 'Community';
    pluralName: 'communities';
    singularName: 'community';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ImpactSection: Schema.Attribute.Component<'community.impact-header', false>;
    LivelihoodSection: Schema.Attribute.Component<
      'community.program-data',
      false
    >;
    LiveProgramSection: Schema.Attribute.Component<
      'community.live-program-section',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::community.community'
    > &
      Schema.Attribute.Private;
    PageIntroSection: Schema.Attribute.Component<
      'community.intro-section',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    SectionData: Schema.Attribute.Component<
      'community.related-impact-reference-section',
      false
    >;
    TabSectionDetails: Schema.Attribute.Component<'community.tab-card', true>;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactUsContactUs extends Struct.SingleTypeSchema {
  collectionName: 'contact_uses';
  info: {
    displayName: 'Contact Us';
    pluralName: 'contact-uses';
    singularName: 'contact-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ContactInfoSection: Schema.Attribute.Component<
      'contact-us.contact-detail-card',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    GlobalPresenceSection: Schema.Attribute.Component<
      'contact-us.country-selector-card',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-us.contact-us'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDivedendDivedend extends Struct.SingleTypeSchema {
  collectionName: 'divedends';
  info: {
    displayName: 'Divedend';
    pluralName: 'divedends';
    singularName: 'divedend';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    DivedendHistorySection: Schema.Attribute.Component<
      'investor.dividend-history-section',
      false
    >;
    DividendTdsCommunicationSection: Schema.Attribute.Component<
      'investor.dividend-tds-document-card',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::divedend.divedend'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEmployeeStockOptionSchemeEmployeeStockOptionScheme
  extends Struct.SingleTypeSchema {
  collectionName: 'employee_stock_option_schemes';
  info: {
    displayName: 'Employee Stock Option Scheme';
    pluralName: 'employee-stock-option-schemes';
    singularName: 'employee-stock-option-scheme';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    EmployeeStockOptionSchemesSection: Schema.Attribute.Component<
      'investor.pdfblock',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::employee-stock-option-scheme.employee-stock-option-scheme'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEthicsAndComplianceEthicsAndCompliance
  extends Struct.SingleTypeSchema {
  collectionName: 'ethics_and_compliances';
  info: {
    displayName: 'Ethics And Compliance';
    pluralName: 'ethics-and-compliances';
    singularName: 'ethics-and-compliance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ethics-and-compliance.ethics-and-compliance'
    > &
      Schema.Attribute.Private;
    PageIntroSection: Schema.Attribute.Component<
      'ethics-and-compliance.intro-section',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFinancialFinancial extends Struct.SingleTypeSchema {
  collectionName: 'financials';
  info: {
    displayName: 'Financial';
    pluralName: 'financials';
    singularName: 'financial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::financial.financial'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    RelatedPartyTransactionsSection: Schema.Attribute.Component<
      'investor.pdfblock',
      true
    >;
    RevenueProfitabilitySection: Schema.Attribute.Component<
      'investor.financial-revenue-profitability-section',
      false
    >;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGlobalGenericsGlobalGenerics
  extends Struct.SingleTypeSchema {
  collectionName: 'global_generics_p';
  info: {
    displayName: 'Global Generics';
    pluralName: 'global-generics-p';
    singularName: 'global-generics';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Component<
      'global-generics.description',
      false
    >;
    genericsAndComplexGenerics: Schema.Attribute.Component<
      'global-generics.generics-and-complex-generics',
      false
    >;
    hero: Schema.Attribute.Component<'shared.image', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global-generics.global-generics'
    > &
      Schema.Attribute.Private;
    ourInhalationBusiness: Schema.Attribute.Component<
      'global-generics.our-inhalation-business',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    regionalPresence: Schema.Attribute.Component<
      'global-generics.regional-presence',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGlobalPresenceGlobalPresence
  extends Struct.SingleTypeSchema {
  collectionName: 'global_presences';
  info: {
    displayName: 'Global Presence';
    pluralName: 'global-presences';
    singularName: 'global-presence';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    GlobalPresenceSection: Schema.Attribute.Component<
      'global-presence.presence-card',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global-presence.global-presence'
    > &
      Schema.Attribute.Private;
    PageIntroSection: Schema.Attribute.Component<
      'global-presence.intro-section',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGlobalTechnicalPresenceGlobalTechnicalPresence
  extends Struct.CollectionTypeSchema {
  collectionName: 'global_technical_presences';
  info: {
    displayName: 'Global Technical Presence';
    pluralName: 'global-technical-presences';
    singularName: 'global-technical-presence';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global-technical-presence.global-technical-presence'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomepageHomepage extends Struct.SingleTypeSchema {
  collectionName: 'homepages';
  info: {
    displayName: 'Homepage';
    pluralName: 'homepages';
    singularName: 'homepage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    csr: Schema.Attribute.Component<'homepage.csr', false>;
    hero: Schema.Attribute.Component<'homepage.hero', false>;
    life: Schema.Attribute.Component<'homepage.life', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homepage.homepage'
    > &
      Schema.Attribute.Private;
    news: Schema.Attribute.Component<'homepage.news', false>;
    ourBusiness: Schema.Attribute.Component<'homepage.our-business', false>;
    ourPurpose: Schema.Attribute.Component<'homepage.our-purpose', false>;
    ourStory: Schema.Attribute.Component<'homepage.our-story', false>;
    overView: Schema.Attribute.Component<'homepage.over-view', false>;
    publishedAt: Schema.Attribute.DateTime;
    sustainability: Schema.Attribute.Component<
      'homepage.sustainability',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIndiaIndia extends Struct.SingleTypeSchema {
  collectionName: 'indias';
  info: {
    displayName: 'India';
    pluralName: 'indias';
    singularName: 'india';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero: Schema.Attribute.Component<'shared.image', false>;
    IndiaAtAGlance: Schema.Attribute.Component<
      'india.india-at-a-glance',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::india.india'> &
      Schema.Attribute.Private;
    overview: Schema.Attribute.Component<'india.overview', false>;
    patientSupportPrograms: Schema.Attribute.Component<
      'india.patient-support-programs',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    therapies: Schema.Attribute.Component<'india.therapies', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    WhatWeDo: Schema.Attribute.Component<'india.what-we-do', false>;
  };
}

export interface ApiInvestorFaqInvestorFaq extends Struct.SingleTypeSchema {
  collectionName: 'investor_faqs';
  info: {
    displayName: 'Investor Faq';
    pluralName: 'investor-faqs';
    singularName: 'investor-faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FaqSection: Schema.Attribute.Component<'investor.faq-list', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::investor-faq.investor-faq'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInvestorRegulationDisclosureInvestorRegulationDisclosure
  extends Struct.SingleTypeSchema {
  collectionName: 'investor_regulation_disclosures';
  info: {
    displayName: 'Investor Regulation Disclosure';
    pluralName: 'investor-regulation-disclosures';
    singularName: 'investor-regulation-disclosure';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    DisclosureIntroSection: Schema.Attribute.Component<
      'investor.disclouser-intro-data',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::investor-regulation-disclosure.investor-regulation-disclosure'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    RegulationDisclosureSection: Schema.Attribute.Component<
      'investor.regulation-disclosure-item',
      true
    >;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInvestorInvestor extends Struct.SingleTypeSchema {
  collectionName: 'investors';
  info: {
    displayName: 'Investor';
    pluralName: 'investors';
    singularName: 'investor';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    CorporateGovernanceSection: Schema.Attribute.Component<
      'investor.governance-link-card',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    IntroductionSection: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::investor.investor'
    > &
      Schema.Attribute.Private;
    NewsSection: Schema.Attribute.Component<'homepage.news', false>;
    publishedAt: Schema.Attribute.DateTime;
    ReportsFilingSection: Schema.Attribute.Component<
      'investor.reports-filings-section',
      false
    >;
    ShareholderInformationSection: Schema.Attribute.Component<
      'investor.shareholder-information-data',
      false
    >;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInvestorsUpdateInvestorsUpdate
  extends Struct.CollectionTypeSchema {
  collectionName: 'investors_updates';
  info: {
    displayName: 'Investors Update Subscribers';
    pluralName: 'investors-updates';
    singularName: 'investors-update';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::investors-update.investors-update'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLeaderLeader extends Struct.CollectionTypeSchema {
  collectionName: 'leaders';
  info: {
    displayName: 'Leader';
    pluralName: 'leaders';
    singularName: 'leader';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Age: Schema.Attribute.String;
    Appointed: Schema.Attribute.Date;
    audit_committee: Schema.Attribute.Boolean;
    board_of_directors: Schema.Attribute.Boolean;
    CommitteeMembership: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cta: Schema.Attribute.Component<'shared.cta', false>;
    Designation: Schema.Attribute.String;
    DetailDescription: Schema.Attribute.RichText;
    DisplayOrder: Schema.Attribute.String;
    EducationDetail: Schema.Attribute.RichText;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    LeaderName: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::leader.leader'
    > &
      Schema.Attribute.Private;
    management_team: Schema.Attribute.Boolean;
    Nationality: Schema.Attribute.String;
    nomination_remuneration_committee: Schema.Attribute.Boolean;
    Pdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PdfTitle: Schema.Attribute.String;
    ProfileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    publishedAt: Schema.Attribute.DateTime;
    risk_management_committee: Schema.Attribute.Boolean;
    slug: Schema.Attribute.UID<'LeaderName'>;
    stakeholders_relationship_committee: Schema.Attribute.Boolean;
    strategy_committee: Schema.Attribute.Boolean;
    sustainability_csr_committee: Schema.Attribute.Boolean;
    Tenure: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLeadershipLeadership extends Struct.SingleTypeSchema {
  collectionName: 'leaderships';
  info: {
    displayName: 'Leadership';
    pluralName: 'leaderships';
    singularName: 'leadership';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::leadership.leadership'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNewsAndEventNewsAndEvent extends Struct.SingleTypeSchema {
  collectionName: 'news_and_events';
  info: {
    displayName: 'News And Event';
    pluralName: 'news-and-events';
    singularName: 'news-and-event';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnnualGeneralMeetingSection: Schema.Attribute.Component<
      'investor.agm-event-card',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    EventSection: Schema.Attribute.Component<'investor.event-card', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-and-event.news-and-event'
    > &
      Schema.Attribute.Private;
    PresentationSection: Schema.Attribute.Component<'investor.pdfblock', true>;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNoticeNotice extends Struct.SingleTypeSchema {
  collectionName: 'notices';
  info: {
    displayName: 'Notice';
    pluralName: 'notices';
    singularName: 'notice';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::notice.notice'
    > &
      Schema.Attribute.Private;
    NoticeSection: Schema.Attribute.Component<'investor.notice-card', true>;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOtherStatutoryInformationOtherStatutoryInformation
  extends Struct.SingleTypeSchema {
  collectionName: 'other_statutory_informations';
  info: {
    displayName: 'Other Statutory Information';
    pluralName: 'other-statutory-informations';
    singularName: 'other-statutory-information';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    EvotingSection: Schema.Attribute.Component<'investor.evoting-card', false>;
    ExtraordinaryGeneralMeetingSection: Schema.Attribute.Component<
      'investor.document-card',
      false
    >;
    KycUpdateSection: Schema.Attribute.Component<
      'investor.document-card',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::other-statutory-information.other-statutory-information'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOurBusinessOurBusiness extends Struct.SingleTypeSchema {
  collectionName: 'our_businesses';
  info: {
    displayName: 'Our Business';
    pluralName: 'our-businesses';
    singularName: 'our-business';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero: Schema.Attribute.Component<'shared.image', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-business.our-business'
    > &
      Schema.Attribute.Private;
    Offering: Schema.Attribute.Component<'our-business.offering', true>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOurManufacturingApproachOurManufacturingApproach
  extends Struct.SingleTypeSchema {
  collectionName: 'our_manufacturing_approaches';
  info: {
    displayName: 'Our Manufacturing Approach';
    pluralName: 'our-manufacturing-approaches';
    singularName: 'our-manufacturing-approach';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    CommentSection: Schema.Attribute.Component<
      'our-manufacturing-approach.comment-data',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    GtoStructureSection: Schema.Attribute.Component<
      'our-manufacturing-approach.gto-section-data',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-manufacturing-approach.our-manufacturing-approach'
    > &
      Schema.Attribute.Private;
    PageIntroSection: Schema.Attribute.Component<
      'our-manufacturing-approach.page-intro-data',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    StrategicPerformanceAreaSection: Schema.Attribute.Component<
      'our-manufacturing-approach.strategic-performance',
      false
    >;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOurManufacturingSiteOurManufacturingSite
  extends Struct.SingleTypeSchema {
  collectionName: 'our_manufacturing_sites';
  info: {
    displayName: 'Our Manufacturing Site';
    pluralName: 'our-manufacturing-sites';
    singularName: 'our-manufacturing-site';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    CountryAddressSection: Schema.Attribute.Component<
      'our-manufacturing-sites.country-card-data',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    IntroSection: Schema.Attribute.Component<
      'our-manufacturing-sites.intro-section',
      false
    >;
    LatamSection: Schema.Attribute.Component<
      'our-manufacturing-sites.international-country-data',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-manufacturing-site.our-manufacturing-site'
    > &
      Schema.Attribute.Private;
    NorthAmericaSection: Schema.Attribute.Component<
      'our-manufacturing-sites.international-country-data',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOurPurposeOurPurpose extends Struct.SingleTypeSchema {
  collectionName: 'our_purposes';
  info: {
    displayName: 'Our Purpose';
    pluralName: 'our-purposes';
    singularName: 'our-purpose';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    CommitmentSection: Schema.Attribute.Component<
      'our-purpose.commitments',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    GuidedFrameWorkSection: Schema.Attribute.Component<
      'our-purpose.guided-frame-work',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-purpose.our-purpose'
    > &
      Schema.Attribute.Private;
    PageIntroSection: Schema.Attribute.Component<
      'our-purpose.intro-card',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    TreatmentSection: Schema.Attribute.Component<
      'our-purpose.treatment-card',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOurScienceOurScience extends Struct.SingleTypeSchema {
  collectionName: 'our_sciences';
  info: {
    displayName: 'Our Science';
    pluralName: 'our-sciences';
    singularName: 'our-science';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ContentSection: Schema.Attribute.Component<
      'our-science.comment-data',
      false
    >;
    CoreSection: Schema.Attribute.Component<'our-science.core-card', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    DigitalTransformationSection: Schema.Attribute.Component<
      'our-science.digital-transformation-data',
      false
    >;
    IntroSection: Schema.Attribute.Component<
      'our-science.intro-section',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-science.our-science'
    > &
      Schema.Attribute.Private;
    NumberHighLightsSection: Schema.Attribute.Component<
      'our-science.numbers-card-data',
      false
    >;
    ParaGraphSection: Schema.Attribute.Component<
      'our-science.comment-data',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    ResearchDevelopmentSection: Schema.Attribute.Component<
      'our-science.research-data',
      false
    >;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOurStoryOurStory extends Struct.SingleTypeSchema {
  collectionName: 'our_stories';
  info: {
    displayName: 'Our Story';
    pluralName: 'our-stories';
    singularName: 'our-story';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    didYouKnow: Schema.Attribute.Component<'our-story.did-you-know', false>;
    hero: Schema.Attribute.Component<'shared.image', false>;
    intro: Schema.Attribute.Component<'our-story.intro', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-story.our-story'
    > &
      Schema.Attribute.Private;
    ourMilestones: Schema.Attribute.Component<
      'our-story.our-milestones',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    section: Schema.Attribute.Component<'our-story.section', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOurValueOurValue extends Struct.SingleTypeSchema {
  collectionName: 'our_values';
  info: {
    displayName: 'Our Value';
    pluralName: 'our-values';
    singularName: 'our-value';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    CulturePrinciplesVideoSection: Schema.Attribute.Component<
      'our-value.culture-principles',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-value.our-value'
    > &
      Schema.Attribute.Private;
    OurValueIntroSection: Schema.Attribute.Component<
      'our-value.intro-our-value',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ValuesOverviewSection: Schema.Attribute.Component<
      'our-value.core-value-card',
      true
    >;
  };
}

export interface ApiPatientSupportProgramsPatientSupportPrograms
  extends Struct.SingleTypeSchema {
  collectionName: 'patient_support_programs_p';
  info: {
    displayName: 'Patient Support Programs';
    pluralName: 'patient-support-programs-p';
    singularName: 'patient-support-programs';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    card: Schema.Attribute.Component<'patient-support-programs.card', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero: Schema.Attribute.Component<'shared.image', false>;
    intro: Schema.Attribute.Component<'patient-support-programs.intro', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::patient-support-programs.patient-support-programs'
    > &
      Schema.Attribute.Private;
    lookingAhead: Schema.Attribute.Component<
      'patient-support-programs.looking-ahead',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPolicyPolicy extends Struct.SingleTypeSchema {
  collectionName: 'policies';
  info: {
    displayName: 'Policy';
    pluralName: 'policies';
    singularName: 'policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::policy.policy'
    > &
      Schema.Attribute.Private;
    PolicyDocumentsSection: Schema.Attribute.Component<
      'investor.pdfblock',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProductCategoryProductCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'product_categories';
  info: {
    displayName: 'Product Category';
    pluralName: 'product-categories';
    singularName: 'product-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::product-category.product-category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProductGeographyProductGeography
  extends Struct.CollectionTypeSchema {
  collectionName: 'product_geographies';
  info: {
    displayName: 'Product Geography';
    pluralName: 'product-geographies';
    singularName: 'product-geography';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::product-geography.product-geography'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProductTherapyProductTherapy
  extends Struct.CollectionTypeSchema {
  collectionName: 'product_therapies';
  info: {
    displayName: 'Product Therapy';
    pluralName: 'product-therapies';
    singularName: 'product-therapy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::product-therapy.product-therapy'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProductProduct extends Struct.CollectionTypeSchema {
  collectionName: 'products';
  info: {
    displayName: 'Product';
    pluralName: 'products';
    singularName: 'product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    brandName: Schema.Attribute.Text;
    category: Schema.Attribute.Relation<
      'manyToOne',
      'api::product-category.product-category'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    form: Schema.Attribute.String;
    geography: Schema.Attribute.Relation<
      'manyToOne',
      'api::product-geography.product-geography'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::product.product'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    therapy: Schema.Attribute.Relation<
      'manyToOne',
      'api::product-therapy.product-therapy'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRedirectRedirect extends Struct.CollectionTypeSchema {
  collectionName: 'redirects';
  info: {
    displayName: 'Redirect';
    pluralName: 'redirects';
    singularName: 'redirect';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Destination: Schema.Attribute.Text;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::redirect.redirect'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Source: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiReportFilingReportFiling extends Struct.SingleTypeSchema {
  collectionName: 'report_filings';
  info: {
    displayName: 'Report Filing';
    pluralName: 'report-filings';
    singularName: 'report-filing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AnnualReportSection: Schema.Attribute.Component<
      'investor.annual-report',
      true
    >;
    AnnualReturnsSection: Schema.Attribute.Component<
      'investor.annual-returns',
      true
    >;
    Board_Meeting_Filings_Section: Schema.Attribute.Component<
      'investor.board-tab',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::report-filing.report-filing'
    > &
      Schema.Attribute.Private;
    OtherExchangeFilingsSection: Schema.Attribute.Component<
      'investor.others-tab',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    QuarterlyResultsSection: Schema.Attribute.Component<
      'investor.quarter-tab',
      true
    >;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSakshamNiveshakSakshamNiveshak
  extends Struct.SingleTypeSchema {
  collectionName: 'saksham_niveshaks';
  info: {
    displayName: 'Saksham Niveshak';
    pluralName: 'saksham-niveshaks';
    singularName: 'saksham-niveshak';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Description: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::saksham-niveshak.saksham-niveshak'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSharePriceSharePrice extends Struct.SingleTypeSchema {
  collectionName: 'share_prices';
  info: {
    displayName: 'Share Price';
    pluralName: 'share-prices';
    singularName: 'share-price';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::share-price.share-price'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    SharePriceSection: Schema.Attribute.Component<
      'investor.share-price-card',
      true
    >;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiShareholdingPatternShareholdingPattern
  extends Struct.SingleTypeSchema {
  collectionName: 'shareholding_patterns';
  info: {
    displayName: 'Shareholding Pattern';
    pluralName: 'shareholding-patterns';
    singularName: 'shareholding-pattern';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::shareholding-pattern.shareholding-pattern'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSpecialtySpecialty extends Struct.SingleTypeSchema {
  collectionName: 'specialties';
  info: {
    displayName: 'Specialty';
    pluralName: 'specialties';
    singularName: 'specialty';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero: Schema.Attribute.Component<'shared.image', false>;
    intro: Schema.Attribute.Component<'specialty.intro', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::specialty.specialty'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    snapshotSection: Schema.Attribute.Component<
      'specialty.snapshot-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSubsidiarySubsidiary extends Struct.SingleTypeSchema {
  collectionName: 'subsidiaries';
  info: {
    displayName: 'Subsidiary';
    pluralName: 'subsidiaries';
    singularName: 'subsidiary';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::subsidiary.subsidiary'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Subsidiaries: Schema.Attribute.Component<'investor.subsidiary-item', true>;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSustainabilitySustainability
  extends Struct.SingleTypeSchema {
  collectionName: 'sustainabilities';
  info: {
    displayName: 'Sustainability';
    pluralName: 'sustainabilities';
    singularName: 'sustainability';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ESGFrameworkSection: Schema.Attribute.Component<
      'sustainability.esg-section-data',
      false
    >;
    ESGGovernanceSection: Schema.Attribute.Component<
      'sustainability.governance-section-data',
      false
    >;
    ESGRatingSection: Schema.Attribute.Component<
      'sustainability.rating-section-data',
      false
    >;
    ESGReportSection: Schema.Attribute.Component<
      'sustainability.esg-report',
      false
    >;
    GlobalFrameworkSection: Schema.Attribute.Component<
      'sustainability.global-framework-section-data',
      false
    >;
    GovernacePdfSection: Schema.Attribute.Component<
      'sustainability.governance-pdf-card',
      false
    >;
    HightLightSection: Schema.Attribute.Component<
      'sustainability.highlight-content',
      false
    >;
    LastSection: Schema.Attribute.Component<
      'sustainability.last-section-data',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sustainability.sustainability'
    > &
      Schema.Attribute.Private;
    OurPatientSection: Schema.Attribute.Component<
      'sustainability.our-patients-data',
      false
    >;
    OurPeopleSection: Schema.Attribute.Component<
      'sustainability.our-people-data',
      false
    >;
    PageIntroSection: Schema.Attribute.Component<
      'sustainability.page-intro-section',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTipsForShareholderTipsForShareholder
  extends Struct.SingleTypeSchema {
  collectionName: 'tips_for_shareholders';
  info: {
    displayName: 'Tips For Shareholder';
    pluralName: 'tips-for-shareholders';
    singularName: 'tips-for-shareholder';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tips-for-shareholder.tips-for-shareholder'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TipsShareHolderSectionContent: Schema.Attribute.Component<
      'investor.investor-tips-shared-section-content',
      true
    >;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTransferPhysicalShareTransferPhysicalShare
  extends Struct.SingleTypeSchema {
  collectionName: 'transfer_physical_shares';
  info: {
    displayName: 'Transfer Physical Share';
    pluralName: 'transfer-physical-shares';
    singularName: 'transfer-physical-share';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Description: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::transfer-physical-share.transfer-physical-share'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiUnclaimedDividendUnclaimedDividend
  extends Struct.SingleTypeSchema {
  collectionName: 'unclaimed_dividends';
  info: {
    displayName: 'Unclaimed Dividend';
    pluralName: 'unclaimed-dividends';
    singularName: 'unclaimed-dividend';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::unclaimed-dividend.unclaimed-dividend'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    TopBanner: Schema.Attribute.Component<'shared.image', false>;
    UnclaimedDivendSection: Schema.Attribute.Component<
      'investor.unclaimed-dividend-card',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::allied-business.allied-business': ApiAlliedBusinessAlliedBusiness;
      'api::analyst-coverage.analyst-coverage': ApiAnalystCoverageAnalystCoverage;
      'api::article.article': ApiArticleArticle;
      'api::award-recognition.award-recognition': ApiAwardRecognitionAwardRecognition;
      'api::branded-emerging-markets.branded-emerging-markets': ApiBrandedEmergingMarketsBrandedEmergingMarkets;
      'api::category.category': ApiCategoryCategory;
      'api::code-of-conduct.code-of-conduct': ApiCodeOfConductCodeOfConduct;
      'api::committee.committee': ApiCommitteeCommittee;
      'api::community.community': ApiCommunityCommunity;
      'api::contact-us.contact-us': ApiContactUsContactUs;
      'api::divedend.divedend': ApiDivedendDivedend;
      'api::employee-stock-option-scheme.employee-stock-option-scheme': ApiEmployeeStockOptionSchemeEmployeeStockOptionScheme;
      'api::ethics-and-compliance.ethics-and-compliance': ApiEthicsAndComplianceEthicsAndCompliance;
      'api::financial.financial': ApiFinancialFinancial;
      'api::global-generics.global-generics': ApiGlobalGenericsGlobalGenerics;
      'api::global-presence.global-presence': ApiGlobalPresenceGlobalPresence;
      'api::global-technical-presence.global-technical-presence': ApiGlobalTechnicalPresenceGlobalTechnicalPresence;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::india.india': ApiIndiaIndia;
      'api::investor-faq.investor-faq': ApiInvestorFaqInvestorFaq;
      'api::investor-regulation-disclosure.investor-regulation-disclosure': ApiInvestorRegulationDisclosureInvestorRegulationDisclosure;
      'api::investor.investor': ApiInvestorInvestor;
      'api::investors-update.investors-update': ApiInvestorsUpdateInvestorsUpdate;
      'api::leader.leader': ApiLeaderLeader;
      'api::leadership.leadership': ApiLeadershipLeadership;
      'api::news-and-event.news-and-event': ApiNewsAndEventNewsAndEvent;
      'api::notice.notice': ApiNoticeNotice;
      'api::other-statutory-information.other-statutory-information': ApiOtherStatutoryInformationOtherStatutoryInformation;
      'api::our-business.our-business': ApiOurBusinessOurBusiness;
      'api::our-manufacturing-approach.our-manufacturing-approach': ApiOurManufacturingApproachOurManufacturingApproach;
      'api::our-manufacturing-site.our-manufacturing-site': ApiOurManufacturingSiteOurManufacturingSite;
      'api::our-purpose.our-purpose': ApiOurPurposeOurPurpose;
      'api::our-science.our-science': ApiOurScienceOurScience;
      'api::our-story.our-story': ApiOurStoryOurStory;
      'api::our-value.our-value': ApiOurValueOurValue;
      'api::patient-support-programs.patient-support-programs': ApiPatientSupportProgramsPatientSupportPrograms;
      'api::policy.policy': ApiPolicyPolicy;
      'api::product-category.product-category': ApiProductCategoryProductCategory;
      'api::product-geography.product-geography': ApiProductGeographyProductGeography;
      'api::product-therapy.product-therapy': ApiProductTherapyProductTherapy;
      'api::product.product': ApiProductProduct;
      'api::redirect.redirect': ApiRedirectRedirect;
      'api::report-filing.report-filing': ApiReportFilingReportFiling;
      'api::saksham-niveshak.saksham-niveshak': ApiSakshamNiveshakSakshamNiveshak;
      'api::share-price.share-price': ApiSharePriceSharePrice;
      'api::shareholding-pattern.shareholding-pattern': ApiShareholdingPatternShareholdingPattern;
      'api::specialty.specialty': ApiSpecialtySpecialty;
      'api::subsidiary.subsidiary': ApiSubsidiarySubsidiary;
      'api::sustainability.sustainability': ApiSustainabilitySustainability;
      'api::tips-for-shareholder.tips-for-shareholder': ApiTipsForShareholderTipsForShareholder;
      'api::transfer-physical-share.transfer-physical-share': ApiTransferPhysicalShareTransferPhysicalShare;
      'api::unclaimed-dividend.unclaimed-dividend': ApiUnclaimedDividendUnclaimedDividend;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
