const tones: Record<string, string> = {
  folder: "text-primary-container",
  ts: "text-secondary",
  tsx: "text-primary",
  go: "text-secondary-fixed-dim",
  md: "text-tertiary-container",
  json: "text-secondary",
  pdf: "text-error",
};

const icons: Record<string, string> = {
  ts: "data_object",
  tsx: "code",
  go: "terminal",
  md: "markdown",
  json: "database",
  pdf: "picture_as_pdf",
};

export default function FileIcon({
  filename,
  open = false,
  icon,
}: {
  filename: string;
  open?: boolean;
  icon?: string;
}) {
  if (filename.endsWith("/")) {
    return (
      <span aria-hidden="true" className={`material-symbols-outlined text-[15px] ${tones.folder}`}>
        {icon ?? (open ? "folder_open" : "folder")}
      </span>
    );
  }
  const ext = filename.split(".").pop() ?? "";
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined text-[15px] ${tones[ext] ?? "text-outline"}`}
    >
      {icon ?? icons[ext] ?? "description"}
    </span>
  );
}
