const ClerkLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-96 
        flex items-center 
        justify-center">
            {children}
        </div>
    );
};

export default ClerkLayout;