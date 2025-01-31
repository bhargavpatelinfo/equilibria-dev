import type { NextApiRequest, NextApiResponse } from 'next'

export default function exit(
  _req: NextApiRequest,
  res: NextApiResponse<void>,
): void {
  const { redirect } = _req.query;
  // Exit the current user from "Draft Mode".
  res.setDraftMode({ enable: false })

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: redirect ? String(redirect) : '/' })
  res.end()
}
