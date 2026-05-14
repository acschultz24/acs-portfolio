export const navLinks = [
  {
    id: 1,
    name: 'Product Design',
    href: '/product-design',
  },
  {
    id: 2,
    name: 'Jewelry',
    href: '/jewelry',
  },
  {
    id: 3,
    name: 'Gallery',
    href: '/gallery',
  },
  {
    id: 4,
    name: 'Contact',
    href: '/contact',
  },
];

export const calculateSizes = (isSmall, isMedium, isLarge) => ({
  deskScale: isSmall ? 0.052 : isMedium ? 0.063 : isLarge ? 0.075 : 0.08,
  deskPosition: [0.4, isSmall ? -3.3 : isMedium ? -3.4 : -3.5, 0],
  cubePosition: [isSmall ? 4 : isMedium ? 5 : 9, -5, 0],
  reactLogoPosition: [isSmall ? 3 : isMedium ? 5 : 12, isSmall ? 4 : 3, 0],
  ringPosition: [isSmall ? -5 : isMedium ? -10 : -24, 10, 0],
  targetPosition: [isSmall ? -5 : isMedium ? -9 : -13, -10, -10],
});
