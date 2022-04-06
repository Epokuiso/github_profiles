type UsageTipProperties =
{
    usageTip: string;
};

export const UsageTip = ({ usageTip }: UsageTipProperties) =>
{
    return <h3>{ usageTip }</h3>;
}