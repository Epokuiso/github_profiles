interface IRepositoryItemProps 
{
    name: string;
    stargazers_count: number;
    url: string;
}

export const RepositoryItem = ({name, stargazers_count, url} :IRepositoryItemProps) =>
{
    return (
        <div>
            <a href={url}>{name}</a>
            <span>
                <p>{stargazers_count}</p>
                <p>Stars</p>
            </span>
        </div>
    );
}