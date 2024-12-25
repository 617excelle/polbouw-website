import { type LucideIcon } from "lucide-react";

interface IconFeatureProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export function IconText({
  Icon,
  title,
  description,
  bgColor,
  iconColor,
}: IconFeatureProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${bgColor} p-4 rounded-2xl mb-4`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 w-3/4">{description}</p>
    </div>
  );
}
