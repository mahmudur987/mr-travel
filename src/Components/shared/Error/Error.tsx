const Error = ({ message }) => {
  return (
    <div className="bg-red-500 text-white p-4 rounded-md">
      <p>{message}</p>
      <p>some Error happen</p>
    </div>
  );
};

export default Error;
