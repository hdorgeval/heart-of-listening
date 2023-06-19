export interface WebSiteConfig {
  copyrightOwner: string;
  email: string;
  facebookLink: string;
  hamburgerMenuPosition: 'left' | 'right';
  instagramLink: string;
  phoneNumber: string;
  websiteSubTitle: string;
  websiteTitle: string;
  whatsAppLink: string;
  youtubeLink: string;
}
export const websiteConfig: WebSiteConfig = {
  facebookLink: 'https://www.facebook.com/john-doe',
  whatsAppLink: 'https://wa.me/0123456789',
  youtubeLink: 'https://www.youtube.com/channel/0123456789',
  instagramLink: 'https://www.instagram.com/john-doe/?hl=fr',
  phoneNumber: '0614763770',
  email: 'john.doe@gmail.com',
  copyrightOwner: 'John Doe',
  websiteTitle: "Au coeur de l'écoute",
  websiteSubTitle: 'Lorem ipsum dolor sit amet',
  hamburgerMenuPosition: 'left',
};
