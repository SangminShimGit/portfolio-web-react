import forever21Image from '@/assets/images/forever21_home.png';
import xxiImage from '@/assets/images/xxi.jpg';
import warehouseImage from '@/assets/images/warehouse.png';
import { StaticImageData } from 'next/image';

export interface Project {
    title: string,
    description: string,
    tech: string[],
    image: StaticImageData,
    link: string,
    github: string
}

export const projects: Project[] = [
    {
        title: "PWA Warehouse Utility",
        description: "Take a photos of a product and upload it to the warehouse database.",
        tech: ["Next.js", "React 18", "TypeScript", "Tailwind CSS"],
        image: warehouseImage,
        link: "https://pwa-warehouse-mvp-v1.vercel.app/",
        github: ""
    },
    {
        title: "Salesforce Commerce Cloud",
        description: "Migration from Microsoft Commerce Server to Salesforce Commerce Cloud.",
        tech: ["Salesforce Commerce Cloud", "C# ASP.NET MVC", "Restful API", "Javascript", "jQuery", "MSSQL"],
        image: forever21Image,
        link: "",
        github: ""
    },
    {
        title: "Headless e-Commerce Website",
        description: "Headless e-Commerce website with Microsoft Commerce Server.",
        tech: ["MS Commerce Server", "C# ASP.NET MVC", "Restful API", "Javascript", "jQuery", "MSSQL"],
        image: xxiImage,
        link: "",
        github: ""
    }
]
