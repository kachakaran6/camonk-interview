import { jsx as _jsx } from "react/jsx-runtime";
import { Skeleton } from "@/components/ui/skeleton";
const LoadingSkeleton = () => {
    return (_jsx("div", { className: "space-y-4", children: [1, 2, 3].map((i) => (_jsx(Skeleton, { className: "h-24 w-full rounded-lg" }, i))) }));
};
export default LoadingSkeleton;
