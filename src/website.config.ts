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

export interface Link {
  url: string;
  title: string;
  label: string;
}
export interface Links {
  facebook: Link;
  instagram: Link;
  whatsApp: Link;
  youtube: Link;
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
    youtube: {
      url: 'https://www.youtube.com/channel/0123456789',
      title: 'Voir mes vidéos sur Youtube',
      label: 'Youtube',
    },
    instagram: {
      url: 'https://www.instagram.com/john-doe/?hl=fr',
      title: 'Me contacter sur Instagram',
      label: 'Instagram',
    },
    facebook: {
      url: 'https://www.facebook.com/john-doe',
      title: 'Me contacter sur Facebook',
      label: 'Facebook',
    },
    whatsApp: {
      url: 'https://wa.me/0123456789',
      title: 'Me contacter sur WhatsApp',
      label: 'WhatsApp',
    },
  },
};
