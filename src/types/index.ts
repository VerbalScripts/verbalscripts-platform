type NavLabel = {
  name: string;
  href: string;
  description: string;
  icon: unknown;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface TestimonyProp {
  testimonials: Array<Testimony>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FreelancerTestimony = {
  description: string;
  name: string;
  imageUrl: string;
  state: string;
  years: string;
};
