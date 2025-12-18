export enum Page {
  Home = 'Home',
  AboutUs = 'AboutUs',
  NewBuilding = 'NewBuilding',
  OurStaff = 'OurStaff',
  GetConnected = 'GetConnected',
  ChurchPlanting = 'ChurchPlanting',
  PlanAVisit = 'PlanAVisit',
  Conference2025 = 'Conference2025',
  Events2026 = 'Events2026',
  Stories = 'Stories',
  Give = 'Give',
  StatementOfFaith = 'StatementOfFaith',
  OurVision = 'OurVision',
  Ministries = 'Ministries',
  ChildrensMinistry = 'ChildrensMinistry',
  Recovery = 'Recovery'
}

export interface NavigationProps {
  setPage: (page: Page) => void;
  closeMenu?: () => void;
}