export const JsonView = ({ document }) => (
  <>
    {document.displayed.title ? <h1>{`JSON Data for "${document.displayed.title}"`}</h1> : null}
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </>
);
