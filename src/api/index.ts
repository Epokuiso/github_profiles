import { IRepositoriesInformation } from "../context/RepositoriesInformationContext";
import { defaultState, IUserInformation } from "../context/UserInformationContext";


const URL = "https://api.github.com/";
const USERS = "users/";
const REPOSITORIES = "/repos";
const TOP_REPOSITORIES_COUNT = 4;

let userInformation: IUserInformation = defaultState;

export const getUserProfileInformation = async (username: string) => 
{
    await fetch (URL + USERS + username)
    .then (response => response.json ())
    .then (data => userInformation = getFormatedUserData (data))
    
    return userInformation;
}

const getFormatedUserData = (data: any) =>
{
    return ( 
    {
        username: data?.login,
        followers: data?.followers,
        following: data?.following,
        stars: 0,
        repos: data?.public_repos,
        profile_picture: data?.avatar_url,
        profile_url: data?.html_url
    })
}

const getRepositories = async (username: string) =>
{
    let repositories: any[] = [];
    await fetch (URL + USERS + username + REPOSITORIES)
    .then (response => response.json ())
    .then (data => repositories.push (...data))
    return repositories;
}

export const setUserRepositories = async (repositories: IRepositoriesInformation[], username: string) =>
{
    const repos = await getRepositories (username);
    repos.forEach (repository => 
        repositories.push({
            name: repository?.name,
            created_at: repository?.created_at,
            stargazers_count: repository?.stargazers_count,
            url: repository?.html_url
        })
    );
}

export const setUserStars = (repositories: IRepositoriesInformation [], userInformation: IUserInformation) =>
{
    let starCount = 0;
    repositories.forEach (repository => starCount += repository.stargazers_count);
    userInformation.stars = starCount;
}

const changeRepositories = (repositoryA: IRepositoriesInformation, repositoryB: IRepositoriesInformation) =>
{
    const copyRepository: IRepositoriesInformation =
    {
        name: repositoryA.name,
        created_at: repositoryA.created_at,
        stargazers_count: repositoryA.stargazers_count,
        url: repositoryA.url
    }

    repositoryA.name = repositoryB.name;
    repositoryA.created_at = repositoryB.created_at;
    repositoryA.stargazers_count = repositoryB.stargazers_count;
    repositoryA.url = repositoryB.url;

    repositoryB.name = copyRepository.name;
    repositoryB.created_at = copyRepository.created_at;
    repositoryB.stargazers_count = copyRepository.stargazers_count;
    repositoryB.url = copyRepository.url;
}

const trimRepositories = (repositories: IRepositoriesInformation []) =>
{
    while (repositories.length > TOP_REPOSITORIES_COUNT)
    {
        repositories.pop ();
    }    
}

export const sortTopRepositories = (repositories: IRepositoriesInformation[]) =>
{
    for(let count = 0; count < repositories.length; count++)
        for(let auxilaryCount = count + 1; auxilaryCount < repositories.length; auxilaryCount++)
            if (repositories[count].stargazers_count < repositories[auxilaryCount].stargazers_count)
                changeRepositories(repositories[count], repositories[auxilaryCount]);
 
    trimRepositories (repositories);
}