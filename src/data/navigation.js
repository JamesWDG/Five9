export const navigationData = [
  {
    id: 1,
    heading: "Home",
    type: "single",
  },
  {
    id: 2,
    heading: "About Us",
    type: "single",
  },
  {
    id: 3,
    heading: "Services",
    type: "dropdown",
    children: [
      { id: 1, heading: "Strategy", parentId: 3 },
      { id: 2, heading: "Fractional CTO", parentId: 3 },
      { id: 3, heading: "Digital", parentId: 3 },
      { id: 4, heading: "Consulting", parentId: 3 },
      { id: 5, heading: "Advisory", parentId: 3 },
    ],
  },
  {
    id: 4,
    heading: "Capabilities",
    type: "dropdown",
    children: [
      { id: 1, heading: "Transformation", parentId: 4 },
      { id: 2, heading: "Artificial Intelligence", parentId: 4 },
      { id: 3, heading: "Security", parentId: 4 },
      { id: 4, heading: "Infrastructure", parentId: 4 },
      { id: 5, heading: "Applications", parentId: 4 },
      { id: 6, heading: "Data Engineering", parentId: 4 },
      { id: 7, heading: "Cloud", parentId: 4 },
    ],
  },
  {
    id: 5,
    heading: "Blog",
    type: "single",
  },
  {
    id: 6,
    heading: "Contact Us",
    type: "single",
  },
];

export const navigationDataFooter = [
  { id: 1, heading: "Home" },
  { id: 2, heading: "About Us" },
  { id: 3, heading: "Services" },
  { id: 4, heading: "Capabilities" },
];
