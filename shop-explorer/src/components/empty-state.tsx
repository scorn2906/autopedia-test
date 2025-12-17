interface Props {
  message: string;
}
const EmptyState = ({ message = "Data is empty" }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;
