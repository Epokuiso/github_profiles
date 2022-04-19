type ITitleProps =
{
    title: string;
};

export const Title = ({ title }: ITitleProps) =>
{
    return <h1>{ title }</h1>;
}