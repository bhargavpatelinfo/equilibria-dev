import Link from "../../link";

export default function AlertBanner({
  preview,
  loading,
}: {
  preview: boolean;
  loading: boolean;
}) {
  if (!preview) return null;
  return (
    <div className="py-2 text-center text-base text-black">
      {`Previewing drafts.`}
      <Link
         to="/api/disable-draft"
        className="underline text-[blue]"
      >
        {`Back to published`}
      </Link>
    </div>
  );
}
