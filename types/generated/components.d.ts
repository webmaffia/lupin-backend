import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsAboutOverviewCard extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_overview_cards';
  info: {
    displayName: 'AboutOverviewCard';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    Description: Schema.Attribute.RichText;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Image_Position: Schema.Attribute.Enumeration<['Left', 'Right']>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_intro_sections';
  info: {
    displayName: 'IntroSection';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Heading: Schema.Attribute.RichText;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutUsRedirectCard extends Struct.ComponentSchema {
  collectionName: 'components_about_us_redirect_cards';
  info: {
    displayName: 'RedirectCard';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
  };
}

export interface AlliedBusinessBusiness extends Struct.ComponentSchema {
  collectionName: 'components_allied_business_businesses';
  info: {
    displayName: 'Business';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface AlliedBusinessIntro extends Struct.ComponentSchema {
  collectionName: 'components_allied_business_intros';
  info: {
    displayName: 'Intro';
  };
  attributes: {
    description: Schema.Attribute.RichText;
  };
}

export interface AlliedBusinessLookingAhead extends Struct.ComponentSchema {
  collectionName: 'components_allied_business_looking_aheads';
  info: {
    displayName: 'Looking Ahead';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface BrandedEmergingMarketsDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_branded_emerging_markets_descriptions';
  info: {
    displayName: 'Description';
  };
  attributes: {
    description: Schema.Attribute.RichText;
  };
}

export interface BrandedEmergingMarketsGlobalInstitutionalBusiness
  extends Struct.ComponentSchema {
  collectionName: 'components_branded_emerging_markets_global_institutional_businesses';
  info: {
    displayName: 'Global Institutional Business';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface BrandedEmergingMarketsMarketCard
  extends Struct.ComponentSchema {
  collectionName: 'components_branded_emerging_markets_market_cards';
  info: {
    displayName: 'Market Card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'files' | 'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BrandedEmergingMarketsMarkets extends Struct.ComponentSchema {
  collectionName: 'components_branded_emerging_markets_markets';
  info: {
    displayName: 'Markets';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    marketCard: Schema.Attribute.Component<
      'branded-emerging-markets.market-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CommunityImageContentCard extends Struct.ComponentSchema {
  collectionName: 'components_community_image_content_cards';
  info: {
    displayName: 'ImageContentCard';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Heading: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Image_Position: Schema.Attribute.Enumeration<['Left', 'Right']>;
  };
}

export interface CommunityImpactHeader extends Struct.ComponentSchema {
  collectionName: 'components_community_impact_headers';
  info: {
    displayName: 'ImpactGlanceSection';
  };
  attributes: {
    ImpactHeadingSection: Schema.Attribute.Component<
      'community.impact-heading-card',
      true
    >;
    Map: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MetricSection: Schema.Attribute.Component<
      'community.impact-metric-card',
      true
    >;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface CommunityImpactHeadingCard extends Struct.ComponentSchema {
  collectionName: 'components_community_impact_heading_cards';
  info: {
    displayName: 'ImpactHeadingCard';
  };
  attributes: {
    Description: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Value: Schema.Attribute.BigInteger;
  };
}

export interface CommunityImpactMetricCard extends Struct.ComponentSchema {
  collectionName: 'components_community_impact_metric_cards';
  info: {
    displayName: 'ImpactMetricCard';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Suffix: Schema.Attribute.String;
    Value: Schema.Attribute.BigInteger;
  };
}

export interface CommunityIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_community_intro_sections';
  info: {
    displayName: 'IntroSection';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PageIntroContent: Schema.Attribute.RichText;
  };
}

export interface CommunityKeyHighLightSection extends Struct.ComponentSchema {
  collectionName: 'components_community_key_high_light_sections';
  info: {
    displayName: 'KeyHighLightSection';
  };
  attributes: {
    KeyHighlites: Schema.Attribute.Component<
      'community.impact-metric-card',
      true
    >;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface CommunityLiveProgramSection extends Struct.ComponentSchema {
  collectionName: 'components_community_live_program_sections';
  info: {
    displayName: 'LiveProgramSectionData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    KeyHighlitesSection: Schema.Attribute.Component<
      'community.key-high-light-section',
      false
    >;
    SubHeading: Schema.Attribute.String;
  };
}

export interface CommunityProgramData extends Struct.ComponentSchema {
  collectionName: 'components_community_program_data';
  info: {
    displayName: 'ProgramData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Component<'shared.global-image', false>;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface CommunityRelatedImpactReferenceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_community_related_impact_reference_sections';
  info: {
    displayName: 'RelatedImpactReferenceSection';
  };
  attributes: {
    DetailDescription: Schema.Attribute.RichText;
  };
}

export interface CommunityTabCard extends Struct.ComponentSchema {
  collectionName: 'components_community_tab_cards';
  info: {
    displayName: 'TabCard';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    TabSectionData: Schema.Attribute.Component<'community.tab-content', false>;
    TabTitle: Schema.Attribute.String;
  };
}

export interface CommunityTabContent extends Struct.ComponentSchema {
  collectionName: 'components_community_tab_contents';
  info: {
    displayName: 'TabContent';
  };
  attributes: {
    KeyHighlites: Schema.Attribute.Component<
      'community.key-high-light-section',
      true
    >;
    SectionData: Schema.Attribute.Component<
      'community.image-content-card',
      false
    >;
    SectionHeading: Schema.Attribute.Component<
      'community.image-content-card',
      false
    >;
  };
}

export interface ContactUsContactDetailCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contact_detail_cards';
  info: {
    displayName: 'ContactDetailCard';
  };
  attributes: {
    ContactCard: Schema.Attribute.Component<
      'contact-us.contact-info-card',
      true
    >;
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String;
  };
}

export interface ContactUsContactInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contact_info_cards';
  info: {
    displayName: 'ContactInfoCard';
  };
  attributes: {
    Email: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean;
    Title: Schema.Attribute.String;
  };
}

export interface ContactUsCountrySelectorCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_country_selector_cards';
  info: {
    displayName: 'CountrySelectorCard';
  };
  attributes: {
    AddressDetail: Schema.Attribute.RichText;
    CountryName: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface EthicsAndComplianceIntroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_ethics_and_compliance_intro_sections';
  info: {
    displayName: 'IntroSection';
  };
  attributes: {
    DetailDescription: Schema.Attribute.RichText;
    IntroDetail: Schema.Attribute.RichText;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface GlobalGenericsCard extends Struct.ComponentSchema {
  collectionName: 'components_global_generics_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    highlights: Schema.Attribute.Component<'global-generics.highlights', true>;
    title: Schema.Attribute.String;
  };
}

export interface GlobalGenericsDescription extends Struct.ComponentSchema {
  collectionName: 'components_global_generics_descriptions';
  info: {
    displayName: 'Description';
  };
  attributes: {
    description: Schema.Attribute.RichText;
  };
}

export interface GlobalGenericsGenericsAndComplexGenerics
  extends Struct.ComponentSchema {
  collectionName: 'components_global_generics_generics_and_complex_generics';
  info: {
    displayName: 'Generics And Complex Generics';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    subSectionOne: Schema.Attribute.Component<
      'global-generics.sub-section-one',
      false
    >;
    subSectionTwo: Schema.Attribute.Component<
      'global-generics.sub-section-two',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface GlobalGenericsHighlights extends Struct.ComponentSchema {
  collectionName: 'components_global_generics_highlights';
  info: {
    displayName: 'Highlights';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface GlobalGenericsOurInhalationBusiness
  extends Struct.ComponentSchema {
  collectionName: 'components_global_generics_our_inhalation_businesses';
  info: {
    displayName: 'Our Inhalation Business';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface GlobalGenericsRegionalPresence extends Struct.ComponentSchema {
  collectionName: 'components_global_generics_regional_presences';
  info: {
    displayName: 'Regional Presence';
  };
  attributes: {
    card: Schema.Attribute.Component<'global-generics.card', true>;
    cardColor: Schema.Attribute.Enumeration<['Light', 'Dark']> &
      Schema.Attribute.DefaultTo<'Light'>;
    title: Schema.Attribute.String;
  };
}

export interface GlobalGenericsSubSectionOne extends Struct.ComponentSchema {
  collectionName: 'components_global_generics_sub_section_ones';
  info: {
    displayName: 'Sub Section One';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'files' | 'images'>;
  };
}

export interface GlobalGenericsSubSectionTwo extends Struct.ComponentSchema {
  collectionName: 'components_global_generics_sub_section_twos';
  info: {
    displayName: 'Sub Section Two';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface GlobalPresenceIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_global_presence_intro_sections';
  info: {
    displayName: 'IntroSection';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    IntroDescription: Schema.Attribute.RichText;
  };
}

export interface GlobalPresencePresenceCard extends Struct.ComponentSchema {
  collectionName: 'components_global_presence_presence_cards';
  info: {
    displayName: 'PresenceCard';
  };
  attributes: {
    CountryName: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'shared.cta', false>;
    Description: Schema.Attribute.RichText;
    DisplayOrder: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImagePosition: Schema.Attribute.Enumeration<['Left', 'Right']>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface GlobalTechnicalOperationGtoStructureCard
  extends Struct.ComponentSchema {
  collectionName: 'components_global_technical_operation_gto_structure_cards';
  info: {
    displayName: 'GTOStructureCard';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    Heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Image_Position: Schema.Attribute.Enumeration<['Left', 'Right']>;
    SubHeading: Schema.Attribute.Blocks;
  };
}

export interface GlobalTechnicalOperationPageIntroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_global_technical_operation_page_intro_sections';
  info: {
    displayName: 'PageIntroSection';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GlobalTechnicalOperationPerformanceAreaCard
  extends Struct.ComponentSchema {
  collectionName: 'components_global_technical_operation_performance_area_cards';
  info: {
    displayName: 'PerformanceAreaCard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subheading: Schema.Attribute.Blocks;
  };
}

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
    cards: Schema.Attribute.Component<'homepage.cards', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
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

export interface IndiaHighlights extends Struct.ComponentSchema {
  collectionName: 'components_india_highlights';
  info: {
    displayName: 'Highlights';
  };
  attributes: {
    feature: Schema.Attribute.String;
  };
}

export interface IndiaIndiaAtAGlance extends Struct.ComponentSchema {
  collectionName: 'components_india_india_at_a_glances';
  info: {
    displayName: 'India at a Glance';
  };
  attributes: {
    feature: Schema.Attribute.Component<'india.highlights', true>;
    title: Schema.Attribute.String;
  };
}

export interface IndiaOurDigitalInitiatives extends Struct.ComponentSchema {
  collectionName: 'components_india_our_digital_initiatives';
  info: {
    displayName: 'Our Digital Initiatives';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', true>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface IndiaOverview extends Struct.ComponentSchema {
  collectionName: 'components_india_overviews';
  info: {
    displayName: 'Overview';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface IndiaPatientSupportPrograms extends Struct.ComponentSchema {
  collectionName: 'components_india_patient_support_programs';
  info: {
    displayName: 'Patient Support Programs';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface IndiaTherapies extends Struct.ComponentSchema {
  collectionName: 'components_india_therapies';
  info: {
    displayName: 'Therapies';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    therapyTab: Schema.Attribute.Component<'india.therapy-tab', true>;
    title: Schema.Attribute.String;
  };
}

export interface IndiaTherapyTab extends Struct.ComponentSchema {
  collectionName: 'components_india_therapy_tabs';
  info: {
    displayName: 'Therapy Tab';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface IndiaWhatWeDo extends Struct.ComponentSchema {
  collectionName: 'components_india_what_we_dos';
  info: {
    displayName: 'What We Do';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    ourDigitalInitiatives: Schema.Attribute.Component<
      'india.our-digital-initiatives',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface InvestorAgmEventCard extends Struct.ComponentSchema {
  collectionName: 'components_investor_agm_event_cards';
  info: {
    displayName: 'AgmEventCard';
  };
  attributes: {
    DisplayOrder: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    MeetingDate: Schema.Attribute.Date;
    MeetingTitle: Schema.Attribute.Text;
    Pdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PosterImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    VideoFile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface InvestorAnalystCard extends Struct.ComponentSchema {
  collectionName: 'components_investor_analyst_cards';
  info: {
    displayName: 'AnalystCard';
  };
  attributes: {
    AnalystName: Schema.Attribute.String;
    DisplayOrder: Schema.Attribute.String;
    Email: Schema.Attribute.String;
    Institution: Schema.Attribute.String;
  };
}

export interface InvestorAnalystCoverageItem extends Struct.ComponentSchema {
  collectionName: 'components_investor_analyst_coverage_items';
  info: {
    displayName: 'analyst-coverage-item';
  };
  attributes: {};
}

export interface InvestorAnnualReport extends Struct.ComponentSchema {
  collectionName: 'components_investor_annual_reports';
  info: {
    displayName: 'AnnualReport';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MicrositeUrl: Schema.Attribute.Text;
    pdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pdfCard: Schema.Attribute.Component<'investor.pdfcomponent', true>;
    TabYear: Schema.Attribute.String;
  };
}

export interface InvestorAnnualReturns extends Struct.ComponentSchema {
  collectionName: 'components_investor_annual_returns';
  info: {
    displayName: 'AnnualReturns';
  };
  attributes: {
    PdfCard: Schema.Attribute.Component<'investor.pdfblock', false>;
  };
}

export interface InvestorBoardTab extends Struct.ComponentSchema {
  collectionName: 'components_investor_board_tabs';
  info: {
    displayName: 'BoardMeetingTab';
  };
  attributes: {
    pdfCard: Schema.Attribute.Component<'investor.pdfblock', true>;
    TabYear: Schema.Attribute.String;
  };
}

export interface InvestorCodeConductDocumentData
  extends Struct.ComponentSchema {
  collectionName: 'components_investor_code_conduct_document_data';
  info: {
    displayName: 'CodeConductDocumentData';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    LangaugePdfDocument: Schema.Attribute.Component<'investor.pdfblock', true>;
    Pdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PdfTitle: Schema.Attribute.String;
    PublishedDate: Schema.Attribute.Date;
  };
}

export interface InvestorDisclosureDocumentLink extends Struct.ComponentSchema {
  collectionName: 'components_investor_disclosure_document_links';
  info: {
    displayName: 'DisclosureDocumentLink';
  };
  attributes: {
    DocumentFile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Label: Schema.Attribute.String;
    Url: Schema.Attribute.Text;
  };
}

export interface InvestorDisclouserIntroData extends Struct.ComponentSchema {
  collectionName: 'components_investor_disclouser_intro_data';
  info: {
    displayName: 'DisclouserIntroData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface InvestorDividendHistorySection extends Struct.ComponentSchema {
  collectionName: 'components_investor_dividend_history_sections';
  info: {
    displayName: 'DividendHistorySection';
  };
  attributes: {
    DivedendHistory: Schema.Attribute.RichText;
    IntroText: Schema.Attribute.RichText;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface InvestorDividendTdsDocumentCard
  extends Struct.ComponentSchema {
  collectionName: 'components_investor_dividend_tds_document_cards';
  info: {
    displayName: 'DividendTdsDocumentCard';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    PdfCard: Schema.Attribute.Component<'investor.pdfblock', false>;
    SubHeading: Schema.Attribute.String;
  };
}

export interface InvestorDocumentCard extends Struct.ComponentSchema {
  collectionName: 'components_investor_document_cards';
  info: {
    displayName: 'ExtraordinaryGeneralMeetingCard';
  };
  attributes: {
    Documents: Schema.Attribute.Component<'investor.pdfblock', true>;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface InvestorDocumentSelector extends Struct.ComponentSchema {
  collectionName: 'components_investor_document_selectors';
  info: {
    displayName: 'DocumentSelector';
  };
  attributes: {
    SectionTitle: Schema.Attribute.String;
  };
}

export interface InvestorEarningsPeriodCard extends Struct.ComponentSchema {
  collectionName: 'components_investor_earnings_period_cards';
  info: {
    displayName: 'EarningsPeriodCard';
  };
  attributes: {
    PdfCard: Schema.Attribute.Component<'investor.pdfcomponent', true>;
    QuarterLabel: Schema.Attribute.String;
  };
}

export interface InvestorEventCard extends Struct.ComponentSchema {
  collectionName: 'components_investor_event_cards';
  info: {
    displayName: 'EventCard';
  };
  attributes: {
    DisplayOrder: Schema.Attribute.String;
    Eventdate: Schema.Attribute.Date;
    EventTitle: Schema.Attribute.Text;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface InvestorEvotingCard extends Struct.ComponentSchema {
  collectionName: 'components_investor_evoting_cards';
  info: {
    displayName: 'EvotingInfoCard';
  };
  attributes: {
    DivendInfo: Schema.Attribute.Component<
      'investor.dividend-history-section',
      true
    >;
    Documents: Schema.Attribute.Component<'investor.pdfblock', true>;
    Heading: Schema.Attribute.RichText;
    NoticeSection: Schema.Attribute.RichText;
    PdfCard: Schema.Attribute.Component<'investor.pdfblock', false>;
    PdfSection: Schema.Attribute.Component<'investor.pdfblock', true>;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface InvestorFaqList extends Struct.ComponentSchema {
  collectionName: 'components_investor_faq_lists';
  info: {
    displayName: 'FaqList';
  };
  attributes: {
    Answer: Schema.Attribute.RichText;
    isActive: Schema.Attribute.Boolean;
    Question: Schema.Attribute.String;
  };
}

export interface InvestorFinancialHighlightCard extends Struct.ComponentSchema {
  collectionName: 'components_investor_financial_highlight_cards';
  info: {
    displayName: 'FinancialHighlightCard';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    DocumentFile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    FinancialYear: Schema.Attribute.String;
    GrossProfit: Schema.Attribute.String;
    GrossProfitMargin: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean;
    RndInvestment: Schema.Attribute.String;
    ViewAllUrl: Schema.Attribute.String;
  };
}

export interface InvestorFinancialMetricChart extends Struct.ComponentSchema {
  collectionName: 'components_investor_financial_metric_charts';
  info: {
    displayName: 'FinancialMetricChart';
  };
  attributes: {
    data: Schema.Attribute.Component<'investor.financial-metric-item', true>;
    MetricTitleTitle: Schema.Attribute.String;
    Unit: Schema.Attribute.String;
  };
}

export interface InvestorFinancialMetricItem extends Struct.ComponentSchema {
  collectionName: 'components_investor_financial_metric_items';
  info: {
    displayName: 'FinancialMetricItem';
  };
  attributes: {
    Amount: Schema.Attribute.String;
    FinancialYear: Schema.Attribute.String;
    Year: Schema.Attribute.String;
  };
}

export interface InvestorFinancialRevenueProfitabilitySection
  extends Struct.ComponentSchema {
  collectionName: 'components_investor_financial_revenue_profitability_sections';
  info: {
    displayName: 'FinancialRevenueProfitabilitySection';
  };
  attributes: {
    charts: Schema.Attribute.Component<'investor.financial-metric-chart', true>;
    Financial_Document_Item: Schema.Attribute.Component<
      'investor.pdfblock',
      true
    >;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface InvestorGovernanceLinkCard extends Struct.ComponentSchema {
  collectionName: 'components_investor_governance_link_cards';
  info: {
    displayName: 'GovernanceLinkCard';
  };
  attributes: {
    DesktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Links: Schema.Attribute.Component<'shared.cta', true>;
    MobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface InvestorIntegratedReportCard extends Struct.ComponentSchema {
  collectionName: 'components_investor_integrated_report_cards';
  info: {
    displayName: 'IntegratedReportCard';
  };
  attributes: {
    CoverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    DownloadLabel: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    ReportFile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ReportTitle: Schema.Attribute.String;
    ReportYear: Schema.Attribute.String;
    ViewAllLabel: Schema.Attribute.String;
    ViewAllUrl: Schema.Attribute.String;
  };
}

export interface InvestorInvestorTipsSharedSectionContent
  extends Struct.ComponentSchema {
  collectionName: 'components_investor_investor_tips_shared_section_contents';
  info: {
    displayName: 'investor-tips-shared-section-content';
  };
  attributes: {
    Content: Schema.Attribute.RichText;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    SectionBgColor: Schema.Attribute.Enumeration<['grey', 'white']>;
    Title: Schema.Attribute.String;
  };
}

export interface InvestorLangaugePdf extends Struct.ComponentSchema {
  collectionName: 'components_investor_langauge_pdfs';
  info: {
    displayName: 'LangaugePdf';
  };
  attributes: {
    LangaugePdfSection: Schema.Attribute.Component<'investor.pdfblock', true>;
  };
}

export interface InvestorNoticeCard extends Struct.ComponentSchema {
  collectionName: 'components_investor_notice_cards';
  info: {
    displayName: 'NoticeCard';
  };
  attributes: {
    DisplayOrder: Schema.Attribute.String;
    Documents: Schema.Attribute.Component<'investor.notice-document', true>;
    FinancialLabel: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface InvestorNoticeDocument extends Struct.ComponentSchema {
  collectionName: 'components_investor_notice_documents';
  info: {
    displayName: 'NoticeDocument';
  };
  attributes: {
    DisplayOrder: Schema.Attribute.String;
    DocumentFile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    isDefault: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    LanguageLabel: Schema.Attribute.String;
  };
}

export interface InvestorNseExchnageData extends Struct.ComponentSchema {
  collectionName: 'components_investor_nse_exchnage_data';
  info: {
    displayName: 'NseExchnageData';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    PdfDocument: Schema.Attribute.Component<'investor.pdfblock', true>;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface InvestorOthersTab extends Struct.ComponentSchema {
  collectionName: 'components_investor_others_tabs';
  info: {
    displayName: 'OthersTab';
  };
  attributes: {
    PdfCard: Schema.Attribute.Component<'investor.pdfblock', true>;
    TabYear: Schema.Attribute.String;
  };
}

export interface InvestorPdfblock extends Struct.ComponentSchema {
  collectionName: 'components_investor_pdfblocks';
  info: {
    displayName: 'PdfCard';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Pdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PublishedDate: Schema.Attribute.Date;
    Title: Schema.Attribute.String;
  };
}

export interface InvestorPdfcomponent extends Struct.ComponentSchema {
  collectionName: 'components_investor_pdfcomponents';
  info: {
    displayName: 'pdfcomponent';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    isAudited: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Pdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PublishedDate: Schema.Attribute.Date;
    QuarterLabel: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface InvestorQuarterTab extends Struct.ComponentSchema {
  collectionName: 'components_investor_quarter_tabs';
  info: {
    displayName: 'QuarterTab';
  };
  attributes: {
    FinancialYear: Schema.Attribute.String;
    QuarterlyEarningsSection: Schema.Attribute.Component<
      'investor.earnings-period-card',
      true
    >;
  };
}

export interface InvestorRegulationDisclosureItem
  extends Struct.ComponentSchema {
  collectionName: 'components_investor_regulation_disclosure_items';
  info: {
    displayName: 'RegulationDisclosureItem';
  };
  attributes: {
    Documents: Schema.Attribute.Component<
      'investor.disclosure-document-link',
      true
    >;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Particular: Schema.Attribute.RichText;
  };
}

export interface InvestorReportsFilingsSection extends Struct.ComponentSchema {
  collectionName: 'components_investor_reports_filings_sections';
  info: {
    displayName: 'ReportsFilingsSection';
  };
  attributes: {
    FinancialHighLightCard: Schema.Attribute.Component<
      'investor.financial-highlight-card',
      false
    >;
    IntegratedReport: Schema.Attribute.Component<
      'investor.integrated-report-card',
      false
    >;
    NseExchangeSection: Schema.Attribute.Component<
      'investor.nse-exchnage-data',
      false
    >;
  };
}

export interface InvestorSharePriceCard extends Struct.ComponentSchema {
  collectionName: 'components_investor_share_price_cards';
  info: {
    displayName: 'SharePriceCard';
  };
  attributes: {
    Content: Schema.Attribute.RichText;
    Heading: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean;
  };
}

export interface InvestorShareholderInformationCard
  extends Struct.ComponentSchema {
  collectionName: 'components_investor_shareholder_information_cards';
  info: {
    displayName: 'ShareHolderInformationCard';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    DisplayOrder: Schema.Attribute.String;
    DocumentPdf: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    PdfTitle: Schema.Attribute.String;
  };
}

export interface InvestorShareholderInformationData
  extends Struct.ComponentSchema {
  collectionName: 'components_investor_shareholder_information_data';
  info: {
    displayName: 'ShareHolderInformationData';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SectionTitle: Schema.Attribute.String;
    ShareHolderInformation: Schema.Attribute.Component<
      'investor.shareholder-information-card',
      true
    >;
  };
}

export interface InvestorSubsidiaryItem extends Struct.ComponentSchema {
  collectionName: 'components_investor_subsidiary_items';
  info: {
    displayName: 'SubsidiaryItem';
  };
  attributes: {
    AnnualReturnsPdf: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    DisplayOrder: Schema.Attribute.String;
    Documents: Schema.Attribute.Component<
      'investor.subsidiary-yearly-document',
      true
    >;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    PdfTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AnnualReturns'>;
    SubsidiaryName: Schema.Attribute.Text;
  };
}

export interface InvestorSubsidiaryYearlyDocument
  extends Struct.ComponentSchema {
  collectionName: 'components_investor_subsidiary_yearly_documents';
  info: {
    displayName: 'subsidiary-yearly-document';
  };
  attributes: {
    DisplayOrder: Schema.Attribute.String;
    DocumentFilePdf: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    FinancialYear: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean;
  };
}

export interface InvestorUnclaimedDividendCard extends Struct.ComponentSchema {
  collectionName: 'components_investor_unclaimed_dividend_cards';
  info: {
    displayName: 'UnclaimedDividendCard';
  };
  attributes: {
    DividendInfoSection: Schema.Attribute.RichText;
    DividendNotice: Schema.Attribute.RichText;
    SectionTitle: Schema.Attribute.Text;
  };
}

export interface MediaMediaKit extends Struct.ComponentSchema {
  collectionName: 'components_media_media_kits';
  info: {
    displayName: 'MediaKitCard';
  };
  attributes: {
    DisplayOrder: Schema.Attribute.String;
    Heading: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Pdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ThumbnailImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface OurBusinessBusinessCountryCard extends Struct.ComponentSchema {
  collectionName: 'components_our_business_business_country_cards';
  info: {
    displayName: 'BusinessCountryCard';
  };
  attributes: {
    Container: Schema.Attribute.Enumeration<['Left', 'Right']>;
    CountryDetails: Schema.Attribute.RichText;
    CountryName: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'shared.cta', false>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface OurBusinessOffering extends Struct.ComponentSchema {
  collectionName: 'components_our_business_offerings';
  info: {
    displayName: 'Offering';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface OurBusinessSectionDetailCard extends Struct.ComponentSchema {
  collectionName: 'components_our_business_section_detail_cards';
  info: {
    displayName: 'SectionDetailCard';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.RichText;
  };
}

export interface OurManufacturingApproachCommentData
  extends Struct.ComponentSchema {
  collectionName: 'components_our_manufacturing_approach_comment_data';
  info: {
    displayName: 'CommentData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    ParagraphDescription: Schema.Attribute.RichText;
  };
}

export interface OurManufacturingApproachGtoSectionData
  extends Struct.ComponentSchema {
  collectionName: 'components_our_manufacturing_approach_gto_section_data';
  info: {
    displayName: 'GtoSectionData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    GtoStructureSection: Schema.Attribute.Component<
      'our-manufacturing-approach.gto-tab',
      true
    >;
    Heading: Schema.Attribute.String;
    PetalImageSvg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    SubHeading: Schema.Attribute.Text;
  };
}

export interface OurManufacturingApproachGtoTab extends Struct.ComponentSchema {
  collectionName: 'components_our_manufacturing_approach_gto_tabs';
  info: {
    displayName: 'GTOTab';
  };
  attributes: {
    GtoStructureCardData: Schema.Attribute.Component<
      'global-technical-operation.gto-structure-card',
      true
    >;
    TabName: Schema.Attribute.String;
  };
}

export interface OurManufacturingApproachPageIntroData
  extends Struct.ComponentSchema {
  collectionName: 'components_our_manufacturing_approach_page_intro_data';
  info: {
    displayName: 'PageIntroData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Heading: Schema.Attribute.Text;
    PetalImageSvg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface OurManufacturingApproachStrategicPerformance
  extends Struct.ComponentSchema {
  collectionName: 'components_our_manufacturing_approach_strategic_performances';
  info: {
    displayName: 'StrategicPerformance';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PerformanceAreaData: Schema.Attribute.Component<
      'global-technical-operation.performance-area-card',
      true
    >;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface OurManufacturingSitesCityAddressCard
  extends Struct.ComponentSchema {
  collectionName: 'components_our_manufacturing_sites_city_address_cards';
  info: {
    displayName: 'CityAddressCard';
  };
  attributes: {
    AddressDetail: Schema.Attribute.RichText;
    CityName: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface OurManufacturingSitesCountryCardData
  extends Struct.ComponentSchema {
  collectionName: 'components_our_manufacturing_sites_country_card_data';
  info: {
    displayName: 'CountryCardData';
  };
  attributes: {
    CityAddressSection: Schema.Attribute.Component<
      'our-manufacturing-sites.city-address-card',
      true
    >;
    CountryName: Schema.Attribute.String;
  };
}

export interface OurManufacturingSitesInternationalCountryData
  extends Struct.ComponentSchema {
  collectionName: 'components_our_manufacturing_sites_international_country_data';
  info: {
    displayName: 'InternationalCountryData';
  };
  attributes: {
    CityAddressSection: Schema.Attribute.Component<
      'our-manufacturing-sites.city-address-card',
      true
    >;
    CountryName: Schema.Attribute.String;
  };
}

export interface OurManufacturingSitesIntroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_our_manufacturing_sites_intro_sections';
  info: {
    displayName: 'IntroSectionData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
  };
}

export interface OurPurposeCommitments extends Struct.ComponentSchema {
  collectionName: 'components_our_purpose_commitments';
  info: {
    displayName: 'Commitments';
  };
  attributes: {
    CommitmentCard: Schema.Attribute.Component<'shared.image-text-cards', true>;
    SectionTitle: Schema.Attribute.RichText;
  };
}

export interface OurPurposeGuidedFrameWork extends Struct.ComponentSchema {
  collectionName: 'components_our_purpose_guided_frame_works';
  info: {
    displayName: 'GuidedFrameWork';
  };
  attributes: {
    FrameWorkCard: Schema.Attribute.Component<'shared.image-text-cards', true>;
    SectionTitle: Schema.Attribute.RichText;
  };
}

export interface OurPurposeIntroCard extends Struct.ComponentSchema {
  collectionName: 'components_our_purpose_intro_cards';
  info: {
    displayName: 'IntroCard';
  };
  attributes: {
    Heading: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ParagraphDescription: Schema.Attribute.RichText;
    SectionTitle: Schema.Attribute.String;
    YoutubeLink: Schema.Attribute.String;
  };
}

export interface OurPurposeTreatmentCard extends Struct.ComponentSchema {
  collectionName: 'components_our_purpose_treatment_cards';
  info: {
    displayName: 'TreatmentCard';
  };
  attributes: {
    Heading: Schema.Attribute.RichText;
    image: Schema.Attribute.Component<'shared.global-image', false>;
    ParaGraphDescription: Schema.Attribute.RichText;
  };
}

export interface OurScienceCommentData extends Struct.ComponentSchema {
  collectionName: 'components_our_science_comment_data';
  info: {
    displayName: 'CommentData';
  };
  attributes: {
    ParagarphData: Schema.Attribute.RichText;
  };
}

export interface OurScienceCoreCard extends Struct.ComponentSchema {
  collectionName: 'components_our_science_core_cards';
  info: {
    displayName: 'CoreCard';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    ImageSvg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Svg_position: Schema.Attribute.Enumeration<['Top', 'Bottom']>;
    Title: Schema.Attribute.String;
  };
}

export interface OurScienceDigitalTransformationData
  extends Struct.ComponentSchema {
  collectionName: 'components_our_science_digital_transformation_data';
  info: {
    displayName: 'DigitalTransformationData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    LeftSideContent: Schema.Attribute.String;
    RightSideContent: Schema.Attribute.RichText;
  };
}

export interface OurScienceIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_our_science_intro_sections';
  info: {
    displayName: 'IntroSectionData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Heading: Schema.Attribute.RichText;
  };
}

export interface OurScienceNumbersCard extends Struct.ComponentSchema {
  collectionName: 'components_our_science_numbers_cards';
  info: {
    displayName: 'NumbersCard';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Suffix: Schema.Attribute.String;
    SvgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Value: Schema.Attribute.String;
  };
}

export interface OurScienceNumbersCardData extends Struct.ComponentSchema {
  collectionName: 'components_our_science_numbers_card_data';
  info: {
    displayName: 'NumbersCardData';
  };
  attributes: {
    BackGroundImage: Schema.Attribute.Component<'shared.global-image', false>;
    NumbersCardSection: Schema.Attribute.Component<
      'our-science.numbers-card',
      true
    >;
  };
}

export interface OurScienceResearchData extends Struct.ComponentSchema {
  collectionName: 'components_our_science_research_data';
  info: {
    displayName: 'ResearchData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface OurStoryDidYouKnow extends Struct.ComponentSchema {
  collectionName: 'components_our_story_did_you_knows';
  info: {
    displayName: 'Did You Know';
  };
  attributes: {
    facts: Schema.Attribute.Component<'our-story.facts', true>;
    title: Schema.Attribute.String;
  };
}

export interface OurStoryFacts extends Struct.ComponentSchema {
  collectionName: 'components_our_story_facts';
  info: {
    displayName: 'Facts';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface OurStoryIntro extends Struct.ComponentSchema {
  collectionName: 'components_our_story_intros';
  info: {
    displayName: 'Intro';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface OurStoryMilestone extends Struct.ComponentSchema {
  collectionName: 'components_our_story_milestones';
  info: {
    displayName: 'Milestone';
  };
  attributes: {
    heading: Schema.Attribute.Text;
  };
}

export interface OurStoryOurMilestones extends Struct.ComponentSchema {
  collectionName: 'components_our_story_our_milestones';
  info: {
    displayName: 'Our Milestones';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    year: Schema.Attribute.Component<'our-story.year', true>;
  };
}

export interface OurStorySection extends Struct.ComponentSchema {
  collectionName: 'components_our_story_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    author: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
    quote: Schema.Attribute.Text;
  };
}

export interface OurStoryYear extends Struct.ComponentSchema {
  collectionName: 'components_our_story_years';
  info: {
    displayName: 'Year';
  };
  attributes: {
    Milestones: Schema.Attribute.Component<'our-story.milestone', true>;
    title: Schema.Attribute.String;
  };
}

export interface OurValueCoreValueCard extends Struct.ComponentSchema {
  collectionName: 'components_our_value_core_value_cards';
  info: {
    displayName: 'CoreValueCard';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface OurValueCulturePrinciples extends Struct.ComponentSchema {
  collectionName: 'components_our_value_culture_principles';
  info: {
    displayName: 'CulturePrinciples';
  };
  attributes: {
    DesktopPosterImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    MobilePosterImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    SectionTitle: Schema.Attribute.Text;
    YoutubeLink: Schema.Attribute.String;
  };
}

export interface OurValueIntroOurValue extends Struct.ComponentSchema {
  collectionName: 'components_our_value_intro_our_values';
  info: {
    displayName: 'IntroOurValue';
  };
  attributes: {
    DetailDescription: Schema.Attribute.RichText;
    Heading: Schema.Attribute.String;
  };
}

export interface PatientSupportProgramsCard extends Struct.ComponentSchema {
  collectionName: 'components_patient_support_programs_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
    logo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface PatientSupportProgramsIntro extends Struct.ComponentSchema {
  collectionName: 'components_patient_support_programs_intros';
  info: {
    displayName: 'Intro';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface PatientSupportProgramsLookingAhead
  extends Struct.ComponentSchema {
  collectionName: 'components_patient_support_programs_looking_aheads';
  info: {
    displayName: 'Looking Ahead';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
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

export interface SharedGlobalImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_global_images';
  info: {
    displayName: 'GlobalImage';
  };
  attributes: {
    DesktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    MobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedGlobalpdf extends Struct.ComponentSchema {
  collectionName: 'components_shared_globalpdfs';
  info: {
    displayName: 'globalInvestor';
  };
  attributes: {
    financialYear: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isActive: Schema.Attribute.Boolean;
    isAudited: Schema.Attribute.Boolean;
    MicrositeUrl: Schema.Attribute.Text;
    pdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    period: Schema.Attribute.String;
    publishedDate: Schema.Attribute.Date;
    quarter: Schema.Attribute.String;
    quarterLabel: Schema.Attribute.String;
    returnDate: Schema.Attribute.String;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'InnerBanner';
  };
  attributes: {
    DesktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Heading: Schema.Attribute.Text;
    MobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    SubHeading: Schema.Attribute.String;
    SubHeadingText: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedImageTextCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_text_cards';
  info: {
    displayName: 'ImageTextCards';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    DisplayOrder: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isActive: Schema.Attribute.String;
    TitleLine1: Schema.Attribute.String;
    TitleLine2: Schema.Attribute.String;
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

export interface SharedSummary extends Struct.ComponentSchema {
  collectionName: 'components_shared_summaries';
  info: {
    displayName: 'summary';
  };
  attributes: {
    summary: Schema.Attribute.RichText;
  };
}

export interface SpecialtyIntro extends Struct.ComponentSchema {
  collectionName: 'components_specialty_intros';
  info: {
    displayName: 'Intro';
  };
  attributes: {
    description: Schema.Attribute.RichText;
  };
}

export interface SpecialtyMoreInfo extends Struct.ComponentSchema {
  collectionName: 'components_specialty_more_infos';
  info: {
    displayName: 'More Info';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    description: Schema.Attribute.RichText;
  };
}

export interface SpecialtySnapshot extends Struct.ComponentSchema {
  collectionName: 'components_specialty_snapshots';
  info: {
    displayName: 'Snapshot';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
    moreInfo: Schema.Attribute.Component<'specialty.more-info', true>;
    title: Schema.Attribute.String;
  };
}

export interface SpecialtySnapshotSection extends Struct.ComponentSchema {
  collectionName: 'components_specialty_snapshot_sections';
  info: {
    displayName: 'Snapshot Section';
  };
  attributes: {
    snapshot: Schema.Attribute.Component<'specialty.snapshot', true>;
    title: Schema.Attribute.String;
  };
}

export interface SustainabilityEsgFrameworkCard extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_esg_framework_cards';
  info: {
    displayName: 'ESGFrameworkCard';
  };
  attributes: {
    CardTitle: Schema.Attribute.String;
    GoalDescription: Schema.Attribute.RichText;
    GoalTitle: Schema.Attribute.String;
    RightStatus: Schema.Attribute.Integer;
    TargetYear: Schema.Attribute.String;
    Value: Schema.Attribute.Integer;
  };
}

export interface SustainabilityEsgReport extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_esg_reports';
  info: {
    displayName: 'EsgReport';
  };
  attributes: {
    Pdf: Schema.Attribute.Component<'investor.pdfblock', false>;
  };
}

export interface SustainabilityEsgSectionData extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_esg_section_data';
  info: {
    displayName: 'ESGSectionData';
  };
  attributes: {
    CenterDescription: Schema.Attribute.RichText;
    CenterTitle: Schema.Attribute.String;
    Description: Schema.Attribute.RichText;
    ESGFrameworkContent: Schema.Attribute.Component<
      'sustainability.esg-framework-card',
      true
    >;
    Image: Schema.Attribute.Component<'shared.global-image', false>;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface SustainabilityGlobalFrameworkCard
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_global_framework_cards';
  info: {
    displayName: 'GlobalFrameworkCard';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isActive: Schema.Attribute.Boolean;
  };
}

export interface SustainabilityGlobalFrameworkSectionData
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_global_framework_section_data';
  info: {
    displayName: 'GlobalFrameworkSectionData';
  };
  attributes: {
    GlobalFrameworkItems: Schema.Attribute.Component<
      'sustainability.global-framework-card',
      true
    >;
    SectionTitle: Schema.Attribute.RichText;
  };
}

export interface SustainabilityGovernanceItems extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_governance_items';
  info: {
    displayName: 'GovernanceItems';
  };
  attributes: {
    Heading: Schema.Attribute.RichText;
    SubHeading: Schema.Attribute.RichText;
  };
}

export interface SustainabilityGovernancePdfCard
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_governance_pdf_cards';
  info: {
    displayName: 'GovernancePdfCard';
  };
  attributes: {
    PdfContent: Schema.Attribute.Component<'investor.pdfblock', true>;
  };
}

export interface SustainabilityGovernanceSectionData
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_governance_section_data';
  info: {
    displayName: 'GovernanceSectionData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    ErmTitle: Schema.Attribute.Text;
    GovernanceDetail: Schema.Attribute.Component<
      'sustainability.governance-items',
      true
    >;
    Pdf: Schema.Attribute.Component<'investor.pdfblock', false>;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface SustainabilityHighlightCard extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_highlight_cards';
  info: {
    displayName: 'HighlightCard';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SustainabilityHighlightContent extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_highlight_contents';
  info: {
    displayName: 'HighlightContent';
  };
  attributes: {
    HightLightItem: Schema.Attribute.Component<
      'sustainability.highlight-card',
      true
    >;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface SustainabilityLastSectionData extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_last_section_data';
  info: {
    displayName: 'LastSectionData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface SustainabilityOurPatientsCard extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_our_patients_cards';
  info: {
    displayName: 'OurPatientsCard';
  };
  attributes: {
    CardTitle: Schema.Attribute.String;
    GoalDescription: Schema.Attribute.RichText;
    GoalTitle: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    TargetYear: Schema.Attribute.String;
    Value: Schema.Attribute.String;
  };
}

export interface SustainabilityOurPatientsData extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_our_patients_data';
  info: {
    displayName: 'OurPatientsData';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Component<'shared.global-image', false>;
    Description: Schema.Attribute.String;
    FlowerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    PatientCard: Schema.Attribute.Component<
      'sustainability.our-patients-card',
      true
    >;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface SustainabilityOurPeopleCard extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_our_people_cards';
  info: {
    displayName: 'OurPeopleCard';
  };
  attributes: {
    CardTitle: Schema.Attribute.String;
    GoalDescription: Schema.Attribute.RichText;
    GoalTitle: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    StatusData: Schema.Attribute.String;
    TargetYear: Schema.Attribute.String;
  };
}

export interface SustainabilityOurPeopleData extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_our_people_data';
  info: {
    displayName: 'OurPeopleData';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    FlowerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Image: Schema.Attribute.Component<'shared.global-image', false>;
    PeopleCard: Schema.Attribute.Component<
      'sustainability.our-people-card',
      true
    >;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface SustainabilityPageIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_page_intro_sections';
  info: {
    displayName: 'PageIntroSectionData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Heading: Schema.Attribute.RichText;
    Image: Schema.Attribute.Component<'shared.global-image', false>;
  };
}

export interface SustainabilityRatingCard extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_rating_cards';
  info: {
    displayName: 'RatingCard';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    isActive: Schema.Attribute.Boolean;
    Title: Schema.Attribute.String;
  };
}

export interface SustainabilityRatingSectionData
  extends Struct.ComponentSchema {
  collectionName: 'components_sustainability_rating_section_data';
  info: {
    displayName: 'RatingSectionData';
  };
  attributes: {
    Image: Schema.Attribute.Component<'shared.global-image', false>;
    RatingItems: Schema.Attribute.Component<'sustainability.rating-card', true>;
    SectionTitle: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.about-overview-card': AboutUsAboutOverviewCard;
      'about-us.intro-section': AboutUsIntroSection;
      'about-us.redirect-card': AboutUsRedirectCard;
      'allied-business.business': AlliedBusinessBusiness;
      'allied-business.intro': AlliedBusinessIntro;
      'allied-business.looking-ahead': AlliedBusinessLookingAhead;
      'branded-emerging-markets.description': BrandedEmergingMarketsDescription;
      'branded-emerging-markets.global-institutional-business': BrandedEmergingMarketsGlobalInstitutionalBusiness;
      'branded-emerging-markets.market-card': BrandedEmergingMarketsMarketCard;
      'branded-emerging-markets.markets': BrandedEmergingMarketsMarkets;
      'community.image-content-card': CommunityImageContentCard;
      'community.impact-header': CommunityImpactHeader;
      'community.impact-heading-card': CommunityImpactHeadingCard;
      'community.impact-metric-card': CommunityImpactMetricCard;
      'community.intro-section': CommunityIntroSection;
      'community.key-high-light-section': CommunityKeyHighLightSection;
      'community.live-program-section': CommunityLiveProgramSection;
      'community.program-data': CommunityProgramData;
      'community.related-impact-reference-section': CommunityRelatedImpactReferenceSection;
      'community.tab-card': CommunityTabCard;
      'community.tab-content': CommunityTabContent;
      'contact-us.contact-detail-card': ContactUsContactDetailCard;
      'contact-us.contact-info-card': ContactUsContactInfoCard;
      'contact-us.country-selector-card': ContactUsCountrySelectorCard;
      'ethics-and-compliance.intro-section': EthicsAndComplianceIntroSection;
      'global-generics.card': GlobalGenericsCard;
      'global-generics.description': GlobalGenericsDescription;
      'global-generics.generics-and-complex-generics': GlobalGenericsGenericsAndComplexGenerics;
      'global-generics.highlights': GlobalGenericsHighlights;
      'global-generics.our-inhalation-business': GlobalGenericsOurInhalationBusiness;
      'global-generics.regional-presence': GlobalGenericsRegionalPresence;
      'global-generics.sub-section-one': GlobalGenericsSubSectionOne;
      'global-generics.sub-section-two': GlobalGenericsSubSectionTwo;
      'global-presence.intro-section': GlobalPresenceIntroSection;
      'global-presence.presence-card': GlobalPresencePresenceCard;
      'global-technical-operation.gto-structure-card': GlobalTechnicalOperationGtoStructureCard;
      'global-technical-operation.page-intro-section': GlobalTechnicalOperationPageIntroSection;
      'global-technical-operation.performance-area-card': GlobalTechnicalOperationPerformanceAreaCard;
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
      'india.highlights': IndiaHighlights;
      'india.india-at-a-glance': IndiaIndiaAtAGlance;
      'india.our-digital-initiatives': IndiaOurDigitalInitiatives;
      'india.overview': IndiaOverview;
      'india.patient-support-programs': IndiaPatientSupportPrograms;
      'india.therapies': IndiaTherapies;
      'india.therapy-tab': IndiaTherapyTab;
      'india.what-we-do': IndiaWhatWeDo;
      'investor.agm-event-card': InvestorAgmEventCard;
      'investor.analyst-card': InvestorAnalystCard;
      'investor.analyst-coverage-item': InvestorAnalystCoverageItem;
      'investor.annual-report': InvestorAnnualReport;
      'investor.annual-returns': InvestorAnnualReturns;
      'investor.board-tab': InvestorBoardTab;
      'investor.code-conduct-document-data': InvestorCodeConductDocumentData;
      'investor.disclosure-document-link': InvestorDisclosureDocumentLink;
      'investor.disclouser-intro-data': InvestorDisclouserIntroData;
      'investor.dividend-history-section': InvestorDividendHistorySection;
      'investor.dividend-tds-document-card': InvestorDividendTdsDocumentCard;
      'investor.document-card': InvestorDocumentCard;
      'investor.document-selector': InvestorDocumentSelector;
      'investor.earnings-period-card': InvestorEarningsPeriodCard;
      'investor.event-card': InvestorEventCard;
      'investor.evoting-card': InvestorEvotingCard;
      'investor.faq-list': InvestorFaqList;
      'investor.financial-highlight-card': InvestorFinancialHighlightCard;
      'investor.financial-metric-chart': InvestorFinancialMetricChart;
      'investor.financial-metric-item': InvestorFinancialMetricItem;
      'investor.financial-revenue-profitability-section': InvestorFinancialRevenueProfitabilitySection;
      'investor.governance-link-card': InvestorGovernanceLinkCard;
      'investor.integrated-report-card': InvestorIntegratedReportCard;
      'investor.investor-tips-shared-section-content': InvestorInvestorTipsSharedSectionContent;
      'investor.langauge-pdf': InvestorLangaugePdf;
      'investor.notice-card': InvestorNoticeCard;
      'investor.notice-document': InvestorNoticeDocument;
      'investor.nse-exchnage-data': InvestorNseExchnageData;
      'investor.others-tab': InvestorOthersTab;
      'investor.pdfblock': InvestorPdfblock;
      'investor.pdfcomponent': InvestorPdfcomponent;
      'investor.quarter-tab': InvestorQuarterTab;
      'investor.regulation-disclosure-item': InvestorRegulationDisclosureItem;
      'investor.reports-filings-section': InvestorReportsFilingsSection;
      'investor.share-price-card': InvestorSharePriceCard;
      'investor.shareholder-information-card': InvestorShareholderInformationCard;
      'investor.shareholder-information-data': InvestorShareholderInformationData;
      'investor.subsidiary-item': InvestorSubsidiaryItem;
      'investor.subsidiary-yearly-document': InvestorSubsidiaryYearlyDocument;
      'investor.unclaimed-dividend-card': InvestorUnclaimedDividendCard;
      'media.media-kit': MediaMediaKit;
      'our-business.business-country-card': OurBusinessBusinessCountryCard;
      'our-business.offering': OurBusinessOffering;
      'our-business.section-detail-card': OurBusinessSectionDetailCard;
      'our-manufacturing-approach.comment-data': OurManufacturingApproachCommentData;
      'our-manufacturing-approach.gto-section-data': OurManufacturingApproachGtoSectionData;
      'our-manufacturing-approach.gto-tab': OurManufacturingApproachGtoTab;
      'our-manufacturing-approach.page-intro-data': OurManufacturingApproachPageIntroData;
      'our-manufacturing-approach.strategic-performance': OurManufacturingApproachStrategicPerformance;
      'our-manufacturing-sites.city-address-card': OurManufacturingSitesCityAddressCard;
      'our-manufacturing-sites.country-card-data': OurManufacturingSitesCountryCardData;
      'our-manufacturing-sites.international-country-data': OurManufacturingSitesInternationalCountryData;
      'our-manufacturing-sites.intro-section': OurManufacturingSitesIntroSection;
      'our-purpose.commitments': OurPurposeCommitments;
      'our-purpose.guided-frame-work': OurPurposeGuidedFrameWork;
      'our-purpose.intro-card': OurPurposeIntroCard;
      'our-purpose.treatment-card': OurPurposeTreatmentCard;
      'our-science.comment-data': OurScienceCommentData;
      'our-science.core-card': OurScienceCoreCard;
      'our-science.digital-transformation-data': OurScienceDigitalTransformationData;
      'our-science.intro-section': OurScienceIntroSection;
      'our-science.numbers-card': OurScienceNumbersCard;
      'our-science.numbers-card-data': OurScienceNumbersCardData;
      'our-science.research-data': OurScienceResearchData;
      'our-story.did-you-know': OurStoryDidYouKnow;
      'our-story.facts': OurStoryFacts;
      'our-story.intro': OurStoryIntro;
      'our-story.milestone': OurStoryMilestone;
      'our-story.our-milestones': OurStoryOurMilestones;
      'our-story.section': OurStorySection;
      'our-story.year': OurStoryYear;
      'our-value.core-value-card': OurValueCoreValueCard;
      'our-value.culture-principles': OurValueCulturePrinciples;
      'our-value.intro-our-value': OurValueIntroOurValue;
      'patient-support-programs.card': PatientSupportProgramsCard;
      'patient-support-programs.intro': PatientSupportProgramsIntro;
      'patient-support-programs.looking-ahead': PatientSupportProgramsLookingAhead;
      'shared.cta': SharedCta;
      'shared.global-image': SharedGlobalImage;
      'shared.globalpdf': SharedGlobalpdf;
      'shared.image': SharedImage;
      'shared.image-text-cards': SharedImageTextCards;
      'shared.news-card': SharedNewsCard;
      'shared.summary': SharedSummary;
      'specialty.intro': SpecialtyIntro;
      'specialty.more-info': SpecialtyMoreInfo;
      'specialty.snapshot': SpecialtySnapshot;
      'specialty.snapshot-section': SpecialtySnapshotSection;
      'sustainability.esg-framework-card': SustainabilityEsgFrameworkCard;
      'sustainability.esg-report': SustainabilityEsgReport;
      'sustainability.esg-section-data': SustainabilityEsgSectionData;
      'sustainability.global-framework-card': SustainabilityGlobalFrameworkCard;
      'sustainability.global-framework-section-data': SustainabilityGlobalFrameworkSectionData;
      'sustainability.governance-items': SustainabilityGovernanceItems;
      'sustainability.governance-pdf-card': SustainabilityGovernancePdfCard;
      'sustainability.governance-section-data': SustainabilityGovernanceSectionData;
      'sustainability.highlight-card': SustainabilityHighlightCard;
      'sustainability.highlight-content': SustainabilityHighlightContent;
      'sustainability.last-section-data': SustainabilityLastSectionData;
      'sustainability.our-patients-card': SustainabilityOurPatientsCard;
      'sustainability.our-patients-data': SustainabilityOurPatientsData;
      'sustainability.our-people-card': SustainabilityOurPeopleCard;
      'sustainability.our-people-data': SustainabilityOurPeopleData;
      'sustainability.page-intro-section': SustainabilityPageIntroSection;
      'sustainability.rating-card': SustainabilityRatingCard;
      'sustainability.rating-section-data': SustainabilityRatingSectionData;
    }
  }
}
