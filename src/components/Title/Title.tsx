type TitleProperties =
{
    title: string;
};

export const Title = ({ title }: TitleProperties) =>
{
    return <h1>{ title }</h1>;
}