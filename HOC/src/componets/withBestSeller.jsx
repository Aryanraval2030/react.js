const withBestSeller = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute bg-red-500 text-white text-xs px-2 py-1">
          Best Seller
        </span>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withBestSeller;