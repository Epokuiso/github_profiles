import { createContext } from "react";


export interface IRepositoriesInformation
{
    name: string;
    created_at: Date;
    stargazers_count: number;
    url: string
};

export const RepositoriesInformationContext = createContext <IRepositoriesInformation []> ([]); 