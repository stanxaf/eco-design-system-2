export const dataTableToolbar = {
  name: "data-table-toolbar",
  components: {
    Default: (
      <div className="flex items-center justify-between">
        <div className="relative flex flex-1 items-center">
          <svg
            className="absolute left-2.5 h-4 w-4 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            placeholder="Search all columns..."
            className="flex h-8 w-full min-w-0 max-w-sm rounded-md border border-input bg-transparent pl-9 pr-3 py-1 text-base outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            disabled
          />
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
            disabled
          >
            Bulk Actions
          </button>
        </div>
      </div>
    ),
  },
};
