import GlobalStyle from "@/styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "@/components/Layout";
import { useImmer } from "use-immer";
import { useImmerLocalStorageState } from "@/hook/useImmerLocalStorageState";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  function handleToggleFavourite(slug) {
    updateArtPiecesInfo((draft) => {
      const piece = draft.find((piece) => piece.slug === slug);
      if (piece) {
        piece.isFavourite = !piece.isFavourite;
      } else {
        draft.push({ slug, isFavourite: true });
      }
    });
  }

  function handleSubmitComment(slug, comment) {
    const currentDate = new Date().toLocaleDateString("de-DE");
    const currentTime = new Date().toJSON().slice(11, 19);
    updateArtPiecesInfo((draft) => {
      const piece = draft.find((piece) => piece.slug === slug);
      if (piece) {
        piece?.comments.push({
          text: comment,
          date: currentDate,
          time: currentTime,
        });
      } else {
        draft.push({
          slug,
          comments: [
            {
              text: comment,
              date: currentDate,
              time: currentTime,
            },
          ],
        });
      }
    });
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavourite={handleToggleFavourite}
          onSubmitComment={handleSubmitComment}
        />
      </SWRConfig>
    </Layout>
  );
}
