const fakeUserList = [
  {
    name: {
      title: "Mr",
      first: "Corsino",
      last: "Nunes",
    },
    email: "corsino.nunes@example.com",
    cell: "(52) 6793-8362",
    picture: {
      large: "https://randomuser.me/api/portraits/men/2.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Louisa",
      last: "Sandersen",
    },
    email: "louisa.sandersen@example.com",
    cell: "94885795",
    picture: {
      large: "https://randomuser.me/api/portraits/women/68.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/68.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/68.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Zorica",
      last: "Milovanović",
    },
    email: "zorica.milovanovic@example.com",
    cell: "062-7018-132",
    picture: {
      large: "https://randomuser.me/api/portraits/women/14.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Esther",
      last: "Jones",
    },
    email: "esther.jones@example.com",
    cell: "(816) 460-7165",
    picture: {
      large: "https://randomuser.me/api/portraits/women/29.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/29.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Guillaume",
      last: "Dumont",
    },
    email: "guillaume.dumont@example.com",
    cell: "06-51-91-32-79",
    picture: {
      large: "https://randomuser.me/api/portraits/men/10.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/10.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/10.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Nevena",
      last: "Teodosić",
    },
    email: "nevena.teodosic@example.com",
    cell: "065-7469-365",
    picture: {
      large: "https://randomuser.me/api/portraits/women/73.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/73.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Joaquim",
      last: "da Mata",
    },
    email: "joaquim.damata@example.com",
    cell: "(97) 1097-6739",
    picture: {
      large: "https://randomuser.me/api/portraits/men/18.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/18.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/18.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Eliza",
      last: "Wright",
    },
    email: "eliza.wright@example.com",
    cell: "081-889-7750",
    picture: {
      large: "https://randomuser.me/api/portraits/women/66.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/66.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/66.jpg",
    },
  },
  {
    name: {
      title: "Monsieur",
      first: "Quentin",
      last: "Durand",
    },
    email: "quentin.durand@example.com",
    cell: "078 782 41 68",
    picture: {
      large: "https://randomuser.me/api/portraits/men/33.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/33.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/33.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Varvara",
      last: "Shcherba",
    },
    email: "varvara.shcherba@example.com",
    cell: "(066) U76-9949",
    picture: {
      large: "https://randomuser.me/api/portraits/women/90.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/90.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/90.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Jordan",
      last: "Carr",
    },
    email: "jordan.carr@example.com",
    cell: "081-427-2366",
    picture: {
      large: "https://randomuser.me/api/portraits/men/18.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/18.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/18.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Emeline",
      last: "Roussel",
    },
    email: "emeline.roussel@example.com",
    cell: "06-63-66-70-85",
    picture: {
      large: "https://randomuser.me/api/portraits/women/13.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/13.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/13.jpg",
    },
  },
];

export type FakeUserName = {
  first: string;
  last: string;
};

export const getFakeUserList = () => {
  return fakeUserList.map(({ name }) => name);
};

export const getFakeDataForUser = ({ name }: { name: FakeUserName }) => {
  return fakeUserList.filter(
    ({ name: uname }) => name.first === uname.first && name.last === uname.last
  )[0];
};

export type FakeUserData = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  cell: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export type FakeUserList = FakeUserName[];
