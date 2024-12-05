import {Link} from "preact-router/match";

const menuItems = [
    { title: 'Inicio',  subTitle: 'Información general', path: '/',         Icon: null },
    { title: 'Menus',   subTitle: 'Alta de Ordenes',     path: '/menu',     Icon: null },
    { title: 'Ordenes', subTitle: 'Control de Ordenes',  path: '/orders',  Icon: null },
];

  interface SideBar {
    path: string;
    title: string;
    subTitle: string;
    Icon?: null;
  }

export const SideBar = () => {
    return (
        <div id="menu" class="bg-gray-900 min-h-screen z-10 text-slate-300 w-80 left-0 overflow-y-scroll">
          <div id="logoSideBar" class="my-4 px-6">
            <h1 class="text-lg md:text-2xl font-bold text-white">
              PointOfSale
              <span class="text-blue-500 text-xs"> app</span>
            </h1>
            <p class="text-slate-500 text-sm">Manejador de estados simple pero poderoso.</p>
          </div>
    
          {/* Nav Items */ }
          <nav id="nav" class="w-full px-6">
    
            {
              menuItems.map( item =>(
                <SideMenuItem key={item.title} {...item} />
              ) )
            }
    
    
          </nav>
        </div>
      );
}

const SideMenuItem = ({ path, title, subTitle, Icon }: SideBar) => {
  return (
    <Link activeClassName="active" href={path}>
        <div class='h-full align-top self-start'>
            {/* <Icon /> */}
        </div>
        <div class="flex flex-col">
            <span class="text-lg font-bold leading-5 text-white">{ title }</span>
            <span class="text-sm text-white/50 hidden md:block">{ subTitle }</span>
        </div>
    </Link>
  );
}
