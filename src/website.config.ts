export interface WebSiteConfig {
  copyrightOwner: string;
  email: string;
  hamburgerMenuPosition: 'left' | 'right';
  phoneNumber: string;
  websiteSubTitle: string;
  websiteTitle: string;
  websiteShortTitle: string;
  websiteUrl: string;
  legalNotice: LegalNotice;
  links: Links;
  displaySocialLinksInFooter: boolean;
}

export interface LegalNotice {
  lastUpdate: string; // date in ISO format : yyyy/mm/dd
}

export interface Links {
  facebook: string;
  instagram: string;
  whatsApp: string;
  youtube: string;
}

export const websiteConfig: WebSiteConfig = {
  copyrightOwner: 'John Doe',
  email: 'john.doe@gmail.com',
  hamburgerMenuPosition: 'left',
  phoneNumber: '0614763770',
  websiteSubTitle: 'Lorem ipsum dolor sit amet',
  websiteTitle: "Au coeur de l'écoute",
  websiteShortTitle: "Au coeur de l'écoute",
  websiteUrl: 'https://mon-site-web.com',
  legalNotice: {
    lastUpdate: '2023/06/21',
  },
  displaySocialLinksInFooter: true,
  links: {
    youtube: 'https://www.youtube.com/channel/0123456789',
    instagram: 'https://www.instagram.com/john-doe/?hl=fr',
    facebook: 'https://www.facebook.com/john-doe',
    whatsApp: 'https://wa.me/0123456789',
  },
};
