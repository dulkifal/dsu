export interface NavItem {
  title: string;
  link: string;
}

export interface Member {
  name: string;
  role: string;
  image: string;
}

export interface Union {
  name: string;
  description: string;
  image: string;
}

export interface Activity {
  id: string | number;
  title: string;
  description: string;
  image?: string;
  link?: string;
}
