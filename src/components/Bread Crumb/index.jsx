import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

return (
    <nav className="text-gray-600 text-sm my-4 mx-20">
        <ul className="flex space-x-2">
        <li>
            <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        </li>
        {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
            <li key={routeTo} className="flex items-center">
                <span className="mx-2">/</span>
                {isLast ? (
                <span className="text-gray-800 font-semibold">{name}</span>
                ) : (
                <Link to={routeTo} className="text-blue-500 hover:underline">
                    {name}
                </Link>
                )}
            </li>
            );
        })}
        </ul>
    </nav>
    );
};

export default Breadcrumb;
