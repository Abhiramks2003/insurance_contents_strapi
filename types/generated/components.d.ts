import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAddOnFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_add_on_features';
  info: {
    displayName: 'add_on_features';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    desc: Schema.Attribute.RichText;
    name: Schema.Attribute.String;
  };
}

export interface SharedAddOns extends Struct.ComponentSchema {
  collectionName: 'components_shared_add_ons';
  info: {
    description: '';
    displayName: 'add_ons';
  };
  attributes: {
    add_on_features: Schema.Attribute.Component<'shared.add-on-features', true>;
    get_covered: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedArticles extends Struct.ComponentSchema {
  collectionName: 'components_shared_articles';
  info: {
    displayName: 'articles';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    read_more: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedAwards extends Struct.ComponentSchema {
  collectionName: 'components_shared_awards';
  info: {
    displayName: 'awards';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    year: Schema.Attribute.Integer;
  };
}

export interface SharedCashless extends Struct.ComponentSchema {
  collectionName: 'components_shared_cashlesses';
  info: {
    displayName: 'cashless';
  };
  attributes: {
    companies: Schema.Attribute.Component<'shared.company', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCmp extends Struct.ComponentSchema {
  collectionName: 'components_shared_cmps';
  info: {
    description: '';
    displayName: 'cmp';
  };
  attributes: {
    comp: Schema.Attribute.Boolean;
    covered: Schema.Attribute.String;
    third: Schema.Attribute.Boolean;
  };
}

export interface SharedCompany extends Struct.ComponentSchema {
  collectionName: 'components_shared_companies';
  info: {
    description: '';
    displayName: 'company';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface SharedComparison extends Struct.ComponentSchema {
  collectionName: 'components_shared_comparisons';
  info: {
    description: '';
    displayName: 'comparison';
  };
  attributes: {
    comprehensive: Schema.Attribute.Boolean;
    feature: Schema.Attribute.String;
    third: Schema.Attribute.Boolean;
  };
}

export interface SharedContents extends Struct.ComponentSchema {
  collectionName: 'components_shared_contents';
  info: {
    description: '';
    displayName: 'contents';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    desc: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SharedDiscount extends Struct.ComponentSchema {
  collectionName: 'components_shared_discounts';
  info: {
    description: '';
    displayName: 'discount';
  };
  attributes: {
    buy_now: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedDiscountBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_discount_blocks';
  info: {
    description: '';
    displayName: 'discount_block';
  };
  attributes: {
    buy_now: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedDocuments extends Struct.ComponentSchema {
  collectionName: 'components_shared_documents';
  info: {
    displayName: 'documents';
  };
  attributes: {
    desc: Schema.Attribute.String;
    docs: Schema.Attribute.Component<'shared.points', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    ans: Schema.Attribute.Text;
    qn: Schema.Attribute.Text;
  };
}

export interface SharedFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFileClaim extends Struct.ComponentSchema {
  collectionName: 'components_shared_file_claims';
  info: {
    description: '';
    displayName: 'file_claim';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    discount_block: Schema.Attribute.Component<'shared.discount-block', false>;
    points: Schema.Attribute.Component<'shared.points', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedHowCompHelp extends Struct.ComponentSchema {
  collectionName: 'components_shared_how_comp_helps';
  info: {
    displayName: 'how_comp_help';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    points: Schema.Attribute.Component<'shared.points', true>;
  };
}

export interface SharedHowToComp extends Struct.ComponentSchema {
  collectionName: 'components_shared_how_to_comps';
  info: {
    description: '';
    displayName: 'how_to_comp';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    comp_steps: Schema.Attribute.Component<'shared.points', true>;
    desc: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHowToRenew extends Struct.ComponentSchema {
  collectionName: 'components_shared_how_to_renews';
  info: {
    description: '';
    displayName: 'how_to_renew';
  };
  attributes: {
    renew_steps: Schema.Attribute.Component<'shared.features', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImportance extends Struct.ComponentSchema {
  collectionName: 'components_shared_importances';
  info: {
    description: '';
    displayName: 'importance';
  };
  attributes: {
    important_points: Schema.Attribute.Component<'shared.features', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedInstances extends Struct.ComponentSchema {
  collectionName: 'components_shared_instances';
  info: {
    description: '';
    displayName: 'instances';
  };
  attributes: {
    is_covered: Schema.Attribute.Boolean;
    points: Schema.Attribute.Component<'shared.points', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedInsurancePlans extends Struct.ComponentSchema {
  collectionName: 'components_shared_insurance_plans';
  info: {
    description: '';
    displayName: 'insurance_plans';
  };
  attributes: {
    company: Schema.Attribute.String;
    cover_value: Schema.Attribute.String;
    net_premium: Schema.Attribute.String;
    pa_cover_price: Schema.Attribute.BigInteger;
    plan_details: Schema.Attribute.String;
  };
}

export interface SharedInsuranceType extends Struct.ComponentSchema {
  collectionName: 'components_shared_insurance_types';
  info: {
    description: '';
    displayName: 'insurance_type';
  };
  attributes: {
    banner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    desc: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedKeyFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_key_features';
  info: {
    displayName: 'key_features';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    features: Schema.Attribute.Component<'shared.features', true>;
    title: Schema.Attribute.String;
    view_more: Schema.Attribute.String;
  };
}

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

export interface SharedPayd extends Struct.ComponentSchema {
  collectionName: 'components_shared_payds';
  info: {
    description: '';
    displayName: 'payd';
  };
  attributes: {
    contents: Schema.Attribute.Component<'shared.contents', true>;
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedPeopleLove extends Struct.ComponentSchema {
  collectionName: 'components_shared_people_loves';
  info: {
    displayName: 'PeopleLove';
  };
  attributes: {
    PeopleLove: Schema.Attribute.Component<'shared.top-policies', false>;
  };
}

export interface SharedPeopleLoveUs extends Struct.ComponentSchema {
  collectionName: 'components_shared_people_loveuses';
  info: {
    description: '';
    displayName: 'PeopleLoveUs';
  };
  attributes: {
    disclaimer: Schema.Attribute.Text;
    Plans: Schema.Attribute.Component<'shared.plans', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedPlans extends Struct.ComponentSchema {
  collectionName: 'components_shared_plans';
  info: {
    description: '';
    displayName: 'Plans';
  };
  attributes: {
    basic_price: Schema.Attribute.BigInteger;
    claim_settlement_ratio: Schema.Attribute.String;
    company: Schema.Attribute.String;
    company_logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pa_cover: Schema.Attribute.BigInteger;
    quote_link: Schema.Attribute.String;
    recommended: Schema.Attribute.Boolean;
    rsa_cover: Schema.Attribute.String;
  };
}

export interface SharedPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_points';
  info: {
    description: '';
    displayName: 'points';
  };
  attributes: {
    pnt: Schema.Attribute.String;
  };
}

export interface SharedPointsToConsider extends Struct.ComponentSchema {
  collectionName: 'components_shared_points_to_considers';
  info: {
    displayName: 'points_to_consider';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    points: Schema.Attribute.Component<'shared.points', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedPolicyInCoverfox extends Struct.ComponentSchema {
  collectionName: 'components_shared_policy_in_coverfoxes';
  info: {
    description: '';
    displayName: 'policy_in_coverfox';
  };
  attributes: {
    disclaimer: Schema.Attribute.String;
    discount: Schema.Attribute.Component<'shared.discount', false>;
    plans: Schema.Attribute.Component<'shared.insurance-plans', true>;
    title: Schema.Attribute.String;
    view_more: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRenewBenefits extends Struct.ComponentSchema {
  collectionName: 'components_shared_renew_benefits';
  info: {
    displayName: 'renew_benefits';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.features', true>;
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedReviews extends Struct.ComponentSchema {
  collectionName: 'components_shared_reviews';
  info: {
    displayName: 'reviews';
  };
  attributes: {};
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSelecting extends Struct.ComponentSchema {
  collectionName: 'components_shared_selectings';
  info: {
    description: '';
    displayName: 'selecting';
  };
  attributes: {
    points_to_consider: Schema.Attribute.Component<
      'shared.points-to-consider',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTable extends Struct.ComponentSchema {
  collectionName: 'components_shared_tables';
  info: {
    displayName: 'table';
  };
  attributes: {
    company: Schema.Attribute.String;
    cs_ratio: Schema.Attribute.Decimal;
    network_garages: Schema.Attribute.Integer;
  };
}

export interface SharedTableComp extends Struct.ComponentSchema {
  collectionName: 'components_shared_table_comps';
  info: {
    displayName: 'table_comp';
  };
  attributes: {
    company: Schema.Attribute.String;
    cs_ratio: Schema.Attribute.Decimal;
    network_garages: Schema.Attribute.Integer;
  };
}

export interface SharedThirdVsComp extends Struct.ComponentSchema {
  collectionName: 'components_shared_third_vs_comps';
  info: {
    description: '';
    displayName: 'third_vs_comp';
  };
  attributes: {
    cmp: Schema.Attribute.Component<'shared.cmp', true>;
    disclaimer: Schema.Attribute.String;
    discount: Schema.Attribute.Component<'shared.discount', false>;
    title: Schema.Attribute.String;
    view_more: Schema.Attribute.String;
  };
}

export interface SharedTopComp extends Struct.ComponentSchema {
  collectionName: 'components_shared_top_comps';
  info: {
    displayName: 'top_comp';
  };
  attributes: {
    disclaimer: Schema.Attribute.String;
    discount_block: Schema.Attribute.Component<'shared.discount-block', false>;
    table_comp: Schema.Attribute.Component<'shared.table-comp', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTopCompanies extends Struct.ComponentSchema {
  collectionName: 'components_shared_top_companies';
  info: {
    displayName: 'top_companies';
  };
  attributes: {
    company: Schema.Attribute.Component<'shared.company', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTopPolicies extends Struct.ComponentSchema {
  collectionName: 'components_shared_top_policies';
  info: {
    displayName: 'TopPolicies';
  };
  attributes: {};
}

export interface SharedTypes extends Struct.ComponentSchema {
  collectionName: 'components_shared_types';
  info: {
    displayName: 'types';
  };
  attributes: {
    discount_block: Schema.Attribute.Component<'shared.discount-block', false>;
    insurance_type: Schema.Attribute.Component<'shared.insurance-type', true>;
  };
}

export interface SharedUserReviews extends Struct.ComponentSchema {
  collectionName: 'components_shared_user_reviews';
  info: {
    displayName: 'user_reviews';
  };
  attributes: {
    date: Schema.Attribute.Date;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
    profile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rating: Schema.Attribute.Decimal;
    review: Schema.Attribute.Text;
  };
}

export interface SharedWhatIsCovered extends Struct.ComponentSchema {
  collectionName: 'components_shared_what_is_covereds';
  info: {
    description: '';
    displayName: 'what_is_covered';
  };
  attributes: {
    discount_block: Schema.Attribute.Component<'shared.discount-block', true>;
    instances: Schema.Attribute.Component<'shared.instances', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedWhatIsInsurance extends Struct.ComponentSchema {
  collectionName: 'components_shared_what_is_insurances';
  info: {
    description: '';
    displayName: 'what_is_insurance';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    video: Schema.Attribute.String;
  };
}

export interface SharedWhyRenew extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_renews';
  info: {
    description: '';
    displayName: 'why_renew';
  };
  attributes: {
    desc: Schema.Attribute.String;
    discount: Schema.Attribute.Component<'shared.discount-block', false>;
    reasons: Schema.Attribute.Component<'shared.features', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.add-on-features': SharedAddOnFeatures;
      'shared.add-ons': SharedAddOns;
      'shared.articles': SharedArticles;
      'shared.awards': SharedAwards;
      'shared.cashless': SharedCashless;
      'shared.cmp': SharedCmp;
      'shared.company': SharedCompany;
      'shared.comparison': SharedComparison;
      'shared.contents': SharedContents;
      'shared.discount': SharedDiscount;
      'shared.discount-block': SharedDiscountBlock;
      'shared.documents': SharedDocuments;
      'shared.faq': SharedFaq;
      'shared.features': SharedFeatures;
      'shared.file-claim': SharedFileClaim;
      'shared.how-comp-help': SharedHowCompHelp;
      'shared.how-to-comp': SharedHowToComp;
      'shared.how-to-renew': SharedHowToRenew;
      'shared.importance': SharedImportance;
      'shared.instances': SharedInstances;
      'shared.insurance-plans': SharedInsurancePlans;
      'shared.insurance-type': SharedInsuranceType;
      'shared.key-features': SharedKeyFeatures;
      'shared.media': SharedMedia;
      'shared.payd': SharedPayd;
      'shared.people-love': SharedPeopleLove;
      'shared.people-love-us': SharedPeopleLoveUs;
      'shared.plans': SharedPlans;
      'shared.points': SharedPoints;
      'shared.points-to-consider': SharedPointsToConsider;
      'shared.policy-in-coverfox': SharedPolicyInCoverfox;
      'shared.quote': SharedQuote;
      'shared.renew-benefits': SharedRenewBenefits;
      'shared.reviews': SharedReviews;
      'shared.rich-text': SharedRichText;
      'shared.selecting': SharedSelecting;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.table': SharedTable;
      'shared.table-comp': SharedTableComp;
      'shared.third-vs-comp': SharedThirdVsComp;
      'shared.top-comp': SharedTopComp;
      'shared.top-companies': SharedTopCompanies;
      'shared.top-policies': SharedTopPolicies;
      'shared.types': SharedTypes;
      'shared.user-reviews': SharedUserReviews;
      'shared.what-is-covered': SharedWhatIsCovered;
      'shared.what-is-insurance': SharedWhatIsInsurance;
      'shared.why-renew': SharedWhyRenew;
    }
  }
}
