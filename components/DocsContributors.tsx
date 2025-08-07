// Single contributor data
const contributor = {
  name: "Ansh Singh Sonkhia",
  title: "Founder, Pumki UI",
  image: "/ansh.png", // Try using the other avatar image
  profileUrl: "https://www.linkedin.com/in/anshsinghsonkhia",
};

export const DocsContributors = () => {
  return (
    <div className="mt-1 pt-4 border-t border-border w-full">
      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
        Created by
      </div>
      <div>
        <a
          href={contributor.profileUrl}
          className="group flex items-center gap-2.5 p-1 rounded-md mb-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={contributor.image}
            width={32}
            height={32}
            className="rounded-full flex-shrink-0"
            alt={contributor.name}
          />
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-foreground group-hover:text-primary">
              {contributor.name}
            </div>
            <div className="text-xs text-muted-foreground">
              {contributor.title}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};