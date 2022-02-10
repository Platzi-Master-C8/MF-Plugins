import Skeleton from "react-loading-skeleton";

export const MainSkeleton = () => {
  return(
    <section className="main-skeleton">
      <article className="main-skeleton__header">
        <Skeleton className="actual-skeleton" />
      </article>

      <article className="main-skeleton__body">
        <Skeleton className="actual-skeleton" />
        <Skeleton className="actual-skeleton" />
      </article>
    </section>
  )
}