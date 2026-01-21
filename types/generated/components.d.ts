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
    cta: Schema.Attribute.String;
    Heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    VideoFile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    VideoUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    NSE_EXCHNAGE: Schema.Attribute.Component<
      'investor.document-selector',
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
    DisplayOrder: Schema.Attribute.String;
    Documents: Schema.Attribute.Component<
      'investor.subsidiary-yearly-document',
      true
    >;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
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

export interface OurStoryHighlightContent extends Struct.ComponentSchema {
  collectionName: 'components_our_story_highlight_contents';
  info: {
    displayName: 'HighlightContent';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Heading: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean;
  };
}

export interface OurStoryImageContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_our_story_image_content_blocks';
  info: {
    displayName: 'ImageContentBlock';
  };
  attributes: {
    Content: Schema.Attribute.RichText;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Image_Position: Schema.Attribute.Enumeration<['Left', 'Right']>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface OurStoryMilestoneItem extends Struct.ComponentSchema {
  collectionName: 'components_our_story_milestone_items';
  info: {
    displayName: 'MilestoneItem';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Title: Schema.Attribute.String;
  };
}

export interface OurStoryMilestoneYear extends Struct.ComponentSchema {
  collectionName: 'components_our_story_milestone_years';
  info: {
    displayName: 'MilestoneYear';
  };
  attributes: {
    DisplayOrder: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Milestones: Schema.Attribute.Component<'our-story.milestone-item', true>;
    Year: Schema.Attribute.String;
  };
}

export interface OurStoryMilestonesSection extends Struct.ComponentSchema {
  collectionName: 'components_our_story_milestones_sections';
  info: {
    displayName: 'SectionData';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Heading: Schema.Attribute.String;
    MilestoneYear: Schema.Attribute.Component<'our-story.milestone-year', true>;
    SectionTitle: Schema.Attribute.String;
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
      'investor.agm-event-card': InvestorAgmEventCard;
      'investor.analyst-card': InvestorAnalystCard;
      'investor.analyst-coverage-item': InvestorAnalystCoverageItem;
      'investor.annual-report': InvestorAnnualReport;
      'investor.annual-returns': InvestorAnnualReturns;
      'investor.board-tab': InvestorBoardTab;
      'investor.disclosure-document-link': InvestorDisclosureDocumentLink;
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
      'investor.notice-card': InvestorNoticeCard;
      'investor.notice-document': InvestorNoticeDocument;
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
      'our-business.section-detail-card': OurBusinessSectionDetailCard;
      'our-purpose.commitments': OurPurposeCommitments;
      'our-purpose.guided-frame-work': OurPurposeGuidedFrameWork;
      'our-purpose.intro-card': OurPurposeIntroCard;
      'our-purpose.treatment-card': OurPurposeTreatmentCard;
      'our-story.highlight-content': OurStoryHighlightContent;
      'our-story.image-content-block': OurStoryImageContentBlock;
      'our-story.milestone-item': OurStoryMilestoneItem;
      'our-story.milestone-year': OurStoryMilestoneYear;
      'our-story.milestones-section': OurStoryMilestonesSection;
      'our-value.core-value-card': OurValueCoreValueCard;
      'our-value.culture-principles': OurValueCulturePrinciples;
      'our-value.intro-our-value': OurValueIntroOurValue;
      'shared.cta': SharedCta;
      'shared.global-image': SharedGlobalImage;
      'shared.globalpdf': SharedGlobalpdf;
      'shared.image': SharedImage;
      'shared.image-text-cards': SharedImageTextCards;
      'shared.news-card': SharedNewsCard;
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
