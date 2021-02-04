export async function getStaticPaths() {
  //dynamic paths with this config:
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  //params comes from getStaticPaths automatically, id comes form the [id] filename
  return {
    props: {
      path: params.id,
    },
  };
}

export default function Post({ path }) {
  return <>{path}</>;
}
