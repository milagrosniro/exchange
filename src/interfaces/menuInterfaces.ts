
export interface ISideBar {
    title: string,
    items: IItemsSideBar[]
  }

  export interface IItemsSideBar{
    icon?:JSX.Element[] | JSX.Element,
    title: string,
    href: string
  }