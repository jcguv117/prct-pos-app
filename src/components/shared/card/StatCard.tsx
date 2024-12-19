import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StatCardProps {
  title: string;
  stat: string | number;
  icon?: IconDefinition | null;
  twClass?: string;
}

export const StatCard = ({title, stat, icon, twClass=''}: StatCardProps) => {
  return (
    <div
      class="bg-white text-black rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div class={"h-full p-6 flex flex-col items-center justify-center space-y-0 " + twClass}>
        { 
            icon && 
            <FontAwesomeIcon class="" icon={icon} size="2x" /> 
        }
        <h3 class="tracking-tight text-base text-center lg:text-2xl font-medium py-1">{title}</h3>
        <div class="text-2xl lg:text-4xl font-bold">{stat}</div>
      </div>
    </div>
  );
}
