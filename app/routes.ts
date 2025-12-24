
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/food-list", "routes/food-list.tsx", { title: "Food List" })
] satisfies RouteConfig;
