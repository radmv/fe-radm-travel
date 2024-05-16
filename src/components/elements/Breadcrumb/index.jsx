import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";

const Breadcrumb = (props) => {
  const { params } = props;

  console.log(params);
  const breadcrumbs = [{ id: 1, name: "Home", href: "/#" }];

  return (
    <nav aria-label="Breadcrumb">
      <ol
        role="list"
        className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        {breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.id}>
            <div className="flex items-center">
              <a
                href={breadcrumb.href}
                className="mr-2 text-sm font-medium text-gray-900"
              >
                {breadcrumb.name}
              </a>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-4 h-5 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
        ))}
        <li className="text-sm">
          <a
            href={`/house-detail/${params.id}`}
            aria-current="page"
            className="font-medium text-gray-500 hover:text-gray-600"
          >
            {params.id}
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
