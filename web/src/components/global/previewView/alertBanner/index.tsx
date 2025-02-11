import Link from "../../link";
import { useRouter } from "next/router";

export default function AlertBanner({
  preview,
  loading,
}: {
  preview: boolean;
  loading: boolean;
}) {
  const router = useRouter();
  if (!preview) return null;
  return (
    <div className="py-2 text-center text-base text-black">
      {`Previewing drafts.`}
      <Link
        //  to="/api/disable-draft"
        to={`/api/disable-draft?redirect=${encodeURIComponent(router.asPath)}`}
        className="underline text-[blue]"
      >
        {`Back to published`}
      </Link>
    </div>
  );
}
