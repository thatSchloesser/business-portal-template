import { useRouter } from 'next/router';

export default function Post({ path }) {
  const router = useRouter();
  const { id } = router.query;
  return <>id: {id}</>;
}
