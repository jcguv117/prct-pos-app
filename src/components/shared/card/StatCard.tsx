interface StatCardProps {
  title: string;
  stat: string | number;
  Icon?: null;
  twClassIcon?: string;
}

export const StatCard = ({title, stat, Icon, twClassIcon}: StatCardProps) => {
  return (
    <div
      class="bg-white text-black rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div class="p-6 flex flex-col items-center justify-between space-y-0">
        {/* <Icon className={twClassIcon} size={40} /> */}
        <h3 class="tracking-tight text-md font-medium py-1">{title}</h3>
        <div class="text-2xl font-bold">{stat}</div>
      </div>
    </div>
  );
}
