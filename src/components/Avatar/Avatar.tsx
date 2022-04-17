interface IAvatarProps 
{
    link: string
}

export const Avatar = ({ link }: IAvatarProps) => 
{
    return <img src={link} alt='User Avatar' />
}