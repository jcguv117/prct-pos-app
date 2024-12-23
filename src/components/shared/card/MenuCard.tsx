import { formatNumberWithCommas } from "../../../helpers";

interface MenuItem {
  image: string;
  label: string;
  price: number;
  description?: string;
}

interface MenuCardProps {
  item: MenuItem;
  add: (item: MenuItem) => void;
}

export const MenuCard = ({ item, add }: MenuCardProps) => {
  const {image, label, price, description} = item;

  const handleErrorImage = (e: Event) => {
    const target = e.target as HTMLImageElement;
    target.src = "/img/drink.png";
  };

  return (
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
        role="article"
        onClick={() => add(item)}
      >
          <img
            src={`${image}`}
            alt={label}
            className="w-full h-48 object-cover"
            onError={handleErrorImage}
          />
          <div className="p-4 select-none">
            <h3 className="text-xl font-semibold mb-2">{label}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${formatNumberWithCommas(price) || '-'}</span>
            </div>
          </div>
      </div>
  );
};
