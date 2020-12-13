import "./styles/Article.scss";
import React, { lazy, Suspense } from 'react';
const NotFoundExcuse = lazy(() => import( '../components/NotFoundExcuse'));

export default function NotFound() {
    return (
        <article style={{ textAlign: "center" }}>
            <h1>404</h1>
            <p>
                <strong>Page not found :(</strong>
            </p>
            <Suspense fallback={<p>The requested page could not be found. We're checking the reason now...</p>}>
                <NotFoundExcuse />
            </Suspense>
        </article>
    );
}
