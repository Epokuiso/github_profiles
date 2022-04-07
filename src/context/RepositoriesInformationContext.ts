import { createContext } from "react";


interface RepositoriesInformation
{
    name: string;
    created_at: Date;
    forks_count: number;
    stargazers_count: number;
    url: string
    
};

export const RepositoriesInformationContext = createContext <RepositoriesInformation []> ([]); 