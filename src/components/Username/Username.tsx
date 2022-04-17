interface IUsernameProps
{
    name: string;
    profile_url: string
}

export const Username = ({ name, profile_url }: IUsernameProps) =>
{
    return <a href={profile_url}>{name}</a>
}