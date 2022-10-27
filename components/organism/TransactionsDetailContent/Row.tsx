interface RowProps{
    title: string;
    value: string | number;
    classNames?: string;
}

export default function Row(props: Partial<RowProps>) {
    const { title, value, classNames } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">{title} <span
    className={`purchase-details ${classNames} `}>{value}</span></p>
  )
}
