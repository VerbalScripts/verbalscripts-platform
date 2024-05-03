/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type NavLabel = {
  name: string;
  href: string;
  description: string;
  icon?: React.ElementType;
  subtitle?: string;
  features?: Array<string>;
  price?: string;
  imgUrl?: string;
};

interface ProgressTracker {
  percentage: string;
  isComplete: boolean;
  failed: boolean;
  error: string;
}

interface OrderFile {
  label: string;
  size: number;
  mimetype: string;
  file_url: string;
  isAnonynous: boolean;
  fileId: string;
  anonymousUserId?: string;
  userId?: string;
  id: string;
  status?: string;
  createdAt: string;
  duration?: number;
}

interface OrderFolder {
  label: string;
  isAnonynous?: boolean;
  anonymousUserId?: string;
  userId?: string;
  id: string;
}
interface ProgressTracker {
  percentage: string;
  isComplete: boolean;
  failed: boolean;
  error: string;
  statusText: string;
}
interface User {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  companyName?: string;
  city?: string;
}

interface OrderConfiguration {
  speakers: string;
  instructions?: string;
  turn_around_time: string;
  text_format: string;
  language: string;
  apply_timestamps: string;
}
interface Order {
  configuration: OrderConfiguration;
  orderStatus?: string;
  files: string[];
  userId?: string;
}

interface PendingOrder {
  configuration: OrderConfiguration;
  files: string[];
  userId: string;
  id: string;
  createdAt: string;
  orderStatus: string;
}

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
};

type FaqsProp = {
  title: string;
  content: string;
};
interface NavItemProp {
  label: NavLabel;
}

interface NavLabelProp {
  solutions: Array<NavLabel>;
  resources: Array<NavLabel>;
  services: Array<NavLabel>;
}

type Testimony = {
  description: string;
  name: string;
  imageUrl: string;
  occupation: string;
};

interface TestimonyProp {
  testimonials: Array<Testimony>;
}
type FreelancerTestimony = {
  description: string;
  name: string;
  imageUrl: string;
  state: string;
  years: string;
};

type ParterLogo = {
  name: string;
  imgUrl: string;
};

interface LogoComponentProp {
  partners: Array<ParterLogo>;
}

interface FilesUploadHeadRef {
  launchPicker: () => void;
}