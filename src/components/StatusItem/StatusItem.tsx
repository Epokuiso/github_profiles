interface IStatusItemProps
{
    title: string;
    count: number;
}


export const StatusItem = ({ title, count }: IStatusItemProps) =>
{
    return (
        <span>
            <p className="status-item-title">{title}</p>
            <p className="status-item-count">{count}</p>
        </span>
    )
}