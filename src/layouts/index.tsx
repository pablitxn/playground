// Types
import { ReactNode } from "react";
// Router
import dynamic from "next/dynamic";
import Link from "next/link";
// AntD
import {
	SmileOutlined,
	PlayCircleOutlined,
	GlobalOutlined,
	CameraOutlined
} from "@ant-design/icons";
import { Route, MenuDataItem } from "@ant-design/pro-layout/lib/typings";
import { SiderMenuProps } from "@ant-design/pro-layout/lib/SiderMenu/SiderMenu";

const ProLayout = dynamic(() => import("@ant-design/pro-layout"), {
	ssr: true
});

const ROUTES: Route = {
	path: "/",
	routes: [
		{
			path: "/",
			name: "Welcome",
			icon: <SmileOutlined />
		},
		{
			path: "/ta-te-ti",
			name: "Ta Te Ti",
			icon: <PlayCircleOutlined />
		},
		{
			path: "/covid-map",
			name: "CoVid-19 Map",
			icon: <GlobalOutlined />
		},
		{
			path: "/croma",
			name: "Croma Customizable",
			icon: <CameraOutlined />
		},
		{
			path: "/360-slider",
			name: "360 Slider",
			icon: <CameraOutlined />
		},
		{
			path: "/ecommerce",
			name: "Ecommerce",
			icon: <CameraOutlined />,
			// routes: [
			// 	{
			// 		path: "/hello-mern/backoffice",
			// 		name: "Backoffice"
			// 		// icon: <SettingOutlined />,
			// 	},
			// 	{
			// 		path: "/hello-mern/ecommerce",
			// 		name: "Web App"
			// 		// icon: <SettingOutlined />,
			// 	}
			// ]
		},
		{
			path: "/backoffice",
			name: "Backoffice",
			icon: <CameraOutlined />
		},
	]
};

const menuHeaderRender = (
	logoDom: ReactNode,
	titleDom: ReactNode,
	props: SiderMenuProps
) => (
	<Link href="/">
		<a>
			{logoDom}
			{!props?.collapsed && titleDom}
		</a>
	</Link>
);

const menuItemRender = (options: MenuDataItem, element: ReactNode) => (
	<Link href={options.path}>
		<a>{element}</a>
	</Link>
);

export default function Main({ children }) {
	return (
		<ProLayout
			style={{ minHeight: "100vh" }}
			route={ROUTES}
			menuItemRender={menuItemRender}
			menuHeaderRender={menuHeaderRender}
		>
			{children}
		</ProLayout>
	);
}