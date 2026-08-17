import { makeWtsMetadata, makeWtsPage } from "@/app/_shared/where-to-stay";

export const revalidate = 86400;
export const dynamicParams = true;
export const generateStaticParams = () => [];
export const generateMetadata = makeWtsMetadata("de");
export default makeWtsPage("de");
